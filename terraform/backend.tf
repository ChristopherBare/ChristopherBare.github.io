terraform {
  backend "s3" {
    bucket         = "terraform-backend-state-bucket-send-email-lambda"
    key            = "terraform.tfstate"
    region         = "us-east-1"
    encrypt        = true
    dynamodb_table = "terraform-lock-table-send-email-lambda"
  }
}
