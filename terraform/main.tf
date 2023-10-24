resource "aws_lambda_function" "send_email_lambda" {
  function_name = "sendEmailLambda"
  role          = aws_iam_role.email_lambda_role.arn
  handler       = "lambda.lambda_handler"
  runtime       = "python3.8"

  environment {
    variables = {
      TO_EMAIL   = "christopherbare@outlook.com",
      FROM_EMAIL = "your_verified_ses_email@example.com",  # Replace with your verified SES email
      REGION     = "us-east-1"
    }
  }
  filename = "lambda_deployment_package.zip"
  source_code_hash = filebase64sha256("lambda_deployment_package.zip")
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
    Statement = [{
      Action = [
        "ses:SendEmail",
        "ses:SendRawEmail",
        "iam:GetPolicy",
        "iam:GetPolicyVersion",
        "iam:GetRole",
        "iam:GetRolePolicy",
        "iam:ListAttachedRolePolicies",
        "iam:ListRolePolicies",
        "iam:ListRoles",
        "lambda:*",
        "logs:DescribeLogGroups",
        "states:DescribeStateMachine",
        "states:ListStateMachines",
        "tag:GetResources",
        "xray:GetTraceSummaries",
        "xray:BatchGetTraces"
      ],
      Effect   = "Allow",
      Resource = "*"
    },
    {
      "Effect": "Allow",
      "Action": "iam:PassRole",
      "Resource": "*",
      "Condition": {
        "StringEquals": {
          "iam:PassedToService": "lambda.amazonaws.com"
        }
      }
    },
    {
      "Effect": "Allow",
      "Action": [
        "logs:DescribeLogStreams",
        "logs:GetLogEvents",
        "logs:FilterLogEvents"
      ],
      "Resource": "arn:aws:logs:*:*:log-group:/aws/lambda/*"
    }]
  })
}

resource "aws_lambda_permission" "apigw_invoke_lambda" {
  statement_id  = "AllowAPIGatewayInvoke"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.send_email_lambda.function_name
  principal     = "apigateway.amazonaws.com"
}

resource "aws_iam_role_policy_attachment" "attach_email_lambda_policy" {
  policy_arn = aws_iam_policy.email_lambda_policy.arn
  role       = aws_iam_role.email_lambda_role.name
}


resource "aws_api_gateway_rest_api" "email_api" {
  name        = "email-api"
  description = "Email API"
}

resource "aws_api_gateway_resource" "root" {
  rest_api_id = aws_api_gateway_rest_api.email_api.id
  parent_id   = aws_api_gateway_rest_api.email_api.root_resource_id
  path_part   = "v1"
}

resource "aws_api_gateway_method" "post" {
  rest_api_id   = aws_api_gateway_rest_api.email_api.id
  resource_id   = aws_api_gateway_resource.root.id
  http_method   = "POST"
  authorization = "NONE"
}

resource "aws_api_gateway_integration" "lambda" {
  rest_api_id = aws_api_gateway_rest_api.email_api.id
  resource_id = aws_api_gateway_resource.root.id
  http_method = aws_api_gateway_method.post.http_method

  integration_http_method = "POST"
  type                   = "AWS_PROXY"
  uri                    = aws_lambda_function.send_email_lambda.invoke_arn
}

#resource "aws_api_gateway_method_response" "Success" {
#  rest_api_id = aws_api_gateway_rest_api.email_api.id
#  resource_id = aws_api_gateway_resource.root.id
#  http_method = aws_api_gateway_method.post.http_method
#  status_code = 200
#
#
#
#  response_models = {
#    "application/json" = "Empty"
#  }
#}
#
#resource "aws_api_gateway_method_response" "default" {
#  rest_api_id = aws_api_gateway_rest_api.email_api.id
#  resource_id = aws_api_gateway_resource.root.id
#  http_method = aws_api_gateway_method.post.http_method
#  status_code = 200
#
#
#
#  response_models = {
#    "application/json" = "Empty"
#  }
#}
#
#resource "aws_api_gateway_method_response" "default_400" {
#  rest_api_id = aws_api_gateway_rest_api.email_api.id
#  resource_id = aws_api_gateway_resource.root.id
#  http_method = aws_api_gateway_method.post.http_method
#  status_code = 400
#
#
#
#  response_models = {
#    "application/json" = "Empty"
#  }
#}
#
#resource "aws_api_gateway_integration_response" "Success" {
#  rest_api_id = aws_api_gateway_rest_api.email_api.id
#  resource_id = aws_api_gateway_resource.root.id
#  http_method = aws_api_gateway_method.post.http_method
#  status_code = 200
#
#
#}
#
#resource "aws_api_gateway_integration_response" "default" {
#  rest_api_id = aws_api_gateway_rest_api.email_api.id
#  resource_id = aws_api_gateway_resource.root.id
#  http_method = aws_api_gateway_method.post.http_method
#  status_code = 200
#
#
#}
#
#resource "aws_api_gateway_integration_response" "default_400" {
#  rest_api_id = aws_api_gateway_rest_api.email_api.id
#  resource_id = aws_api_gateway_resource.root.id
#  http_method = aws_api_gateway_method.post.http_method
#  status_code = 400
#
#
#}

resource "aws_api_gateway_deployment" "deployment" {
  depends_on = [
    aws_api_gateway_integration.lambda,

  ]
  rest_api_id = aws_api_gateway_rest_api.email_api.id
  stage_name = "v1"
}
