output "api_gateway_url" {
  value = aws_api_gateway_rest_api.email_api.root_resource_id
}

output "api_url" {
  value = aws_api_gateway_deployment.deployment.invoke_url
}