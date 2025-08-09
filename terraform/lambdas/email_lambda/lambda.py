import json
import boto3
import os

def lambda_handler(event, context):
    # Handle preflight CORS request
    if event.get('httpMethod') == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type'
            },
            'body': ''
        }

    # Set up SES client
    ses = boto3.client('ses', region_name=os.environ.get('AWS_REGION', 'us-east-1'))

    try:
        # Parse the incoming request
        body = json.loads(event['body'])
        email = body.get('email', '').strip()
        message = body.get('message', '').strip()

        # Validate required fields
        if not email or not message:
            raise ValueError("Email and message are required")

        if '@' not in email:
            raise ValueError("Invalid email format")

        # Get email addresses from environment variables
        from_email = os.environ['FROM_EMAIL']
        to_email = os.environ['TO_EMAIL']

        # Send the email
        ses.send_email(
            Source=from_email,
            Destination={'ToAddresses': [to_email]},
            Message={
                'Subject': {'Data': 'New message from your website'},
                'Body': {
                    'Text': {
                        'Data': f"From: {email}\n\nMessage:\n{message}"
                    }
                }
            },
            ReplyToAddresses=[email]
        )

        return {
            'statusCode': 200,
            'body': json.dumps({'message': 'Email sent successfully'}),
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type'
            }
        }

    except ValueError as e:
        return {
            'statusCode': 400,
            'body': json.dumps({'error': str(e)}),
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type'
            }
        }
    except Exception:
        return {
            'statusCode': 500,
            'body': json.dumps({'error': 'Internal server error'}),
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type'
            }
        }
