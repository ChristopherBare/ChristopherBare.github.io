resource "aws_lambda_function" "send_email_lambda" {
  function_name = "sendEmailLambda"
  role          = aws_iam_role.email_lambda_role.arn
  handler       = "lambda.lambda_handler"
  runtime       = "python3.8"

  environment {
    variables = {
      FROM_EMAIL = "christopherbare@outlook.com"
      TO_EMAIL   = "christopherbare@outlook.com"
    }
  }
  
  filename         = "lambdas/email_lambda/lambda_deployment_package.zip"
  source_code_hash = filebase64sha256("lambdas/email_lambda/lambda_deployment_package.zip")
  
  memory_size = 128  # Adjust based on your needs
  timeout     = 30   # Adjust based on your needs
}

resource "aws_iam_role" "email_lambda_role" {
  name = "lambda-ses-role"
  assume_role_policy = jsonencode({
    Version = "2012-10-17",
    Statement = [{
      Action = "sts:AssumeRole",
      Effect = "Allow",
      Principal = {
        Service = "lambda.amazonaws.com"
      }
    }]
  })
}

resource "aws_iam_policy" "email_lambda_policy" {
  name        = "lambda-ses-policy"
  description = "IAM policy for Lambda to send SES emails"

  policy = jsonencode({
    Version = "2012-10-17",
    Statement = [
      {
        Action = [
          "ses:SendEmail",
          "ses:SendRawEmail"
        ],
        Effect   = "Allow",
        Resource = "*"
      },
      {
        Effect = "Allow",
        Action = [
          "logs:CreateLogGroup",
          "logs:CreateLogStream",
          "logs:PutLogEvents"
        ],
        Resource = "arn:aws:logs:*:*:*"
      }
    ]
  })
}

resource "aws_iam_role_policy_attachment" "attach_email_lambda_policy" {
  policy_arn = aws_iam_policy.email_lambda_policy.arn
  role       = aws_iam_role.email_lambda_role.name
}

# API Gateway Resources
resource "aws_api_gateway_rest_api" "email_api" {
  name        = "email-api"
  description = "API for contact form submissions"
}

resource "aws_api_gateway_resource" "contact" {
  rest_api_id = aws_api_gateway_rest_api.email_api.id
  parent_id   = aws_api_gateway_rest_api.email_api.root_resource_id
  path_part   = "contact"
}

resource "aws_api_gateway_method" "post" {
  rest_api_id   = aws_api_gateway_rest_api.email_api.id
  resource_id   = aws_api_gateway_resource.contact.id
  http_method   = "POST"
  authorization = "NONE"
}

resource "aws_api_gateway_integration" "lambda" {
  rest_api_id = aws_api_gateway_rest_api.email_api.id
  resource_id = aws_api_gateway_resource.contact.id
  http_method = aws_api_gateway_method.post.http_method

  integration_http_method = "POST"
  type                   = "AWS_PROXY"
  uri                    = aws_lambda_function.send_email_lambda.invoke_arn
}

resource "aws_lambda_permission" "apigw" {
  statement_id  = "AllowAPIGatewayInvoke"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.send_email_lambda.function_name
  principal     = "apigateway.amazonaws.com"
  source_arn    = "${aws_api_gateway_rest_api.email_api.execution_arn}/*/*"
}

# CORS Configuration
resource "aws_api_gateway_method" "options" {
  rest_api_id   = aws_api_gateway_rest_api.email_api.id
  resource_id   = aws_api_gateway_resource.contact.id
  http_method   = "OPTIONS"
  authorization = "NONE"
}

resource "aws_api_gateway_integration" "options" {
  rest_api_id = aws_api_gateway_rest_api.email_api.id
  resource_id = aws_api_gateway_resource.contact.id
  http_method = aws_api_gateway_method.options.http_method
  type        = "MOCK"
  
  request_templates = {
    "application/json" = jsonencode({
      statusCode = 200
    })
  }
}

resource "aws_api_gateway_method_response" "options_200" {
  rest_api_id = aws_api_gateway_rest_api.email_api.id
  resource_id = aws_api_gateway_resource.contact.id
  http_method = aws_api_gateway_method.options.http_method
  status_code = "200"

  response_models = {
    "application/json" = "Empty"
  }

  response_parameters = {
    "method.response.header.Access-Control-Allow-Headers" = true,
    "method.response.header.Access-Control-Allow-Methods" = true,
    "method.response.header.Access-Control-Allow-Origin"  = true
  }
}

resource "aws_api_gateway_integration_response" "options" {
  rest_api_id = aws_api_gateway_rest_api.email_api.id
  resource_id = aws_api_gateway_resource.contact.id
  http_method = aws_api_gateway_method.options.http_method
  status_code = aws_api_gateway_method_response.options_200.status_code

  response_parameters = {
    "method.response.header.Access-Control-Allow-Headers" = "'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token'",
    "method.response.header.Access-Control-Allow-Methods" = "'POST,OPTIONS'",
    "method.response.header.Access-Control-Allow-Origin"  = "'*'"
  }

  depends_on = [aws_api_gateway_integration.options]
}

# Deployment
resource "aws_api_gateway_deployment" "deployment" {
  depends_on = [
    aws_api_gateway_integration.lambda,
    aws_api_gateway_integration.options
  ]
  
  rest_api_id = aws_api_gateway_rest_api.email_api.id
}

# Add method response for POST
resource "aws_api_gateway_method_response" "post_200" {
  rest_api_id = aws_api_gateway_rest_api.email_api.id
  resource_id = aws_api_gateway_resource.contact.id
  http_method = aws_api_gateway_method.post.http_method
  status_code = "200"

  response_parameters = {
    "method.response.header.Access-Control-Allow-Origin" = true
  }
}

# Add integration response for POST
resource "aws_api_gateway_integration_response" "post" {
  rest_api_id = aws_api_gateway_rest_api.email_api.id
  resource_id = aws_api_gateway_resource.contact.id
  http_method = aws_api_gateway_method.post.http_method
  status_code = aws_api_gateway_method_response.post_200.status_code

  response_parameters = {
    "method.response.header.Access-Control-Allow-Origin" = "'*'"
  }

  depends_on = [aws_api_gateway_integration.lambda]
}

# Add API Gateway stage settings
resource "aws_api_gateway_stage" "prod" {
  deployment_id = aws_api_gateway_deployment.deployment.id
  rest_api_id   = aws_api_gateway_rest_api.email_api.id
  stage_name    = "prod"
}

resource "aws_api_gateway_method_settings" "all" {
  rest_api_id = aws_api_gateway_rest_api.email_api.id
  stage_name  = aws_api_gateway_stage.prod.stage_name
  method_path = "*/*"

  settings {
    metrics_enabled = true
    logging_level   = "INFO"
  }
}