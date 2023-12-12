import json
import boto3

ses = boto3.client('ses', region_name='us-east-1')  # Replace with your desired AWS region

def lambda_handler(event, context):
    # Parse the event data from the API Gateway trigger
    body = json.loads(event['body'])
    email = body['email']
    message = body['message']

    # Replace with your SES-verified email address
    from_email = 'your_verified_ses_email@example.com'

    # Replace with your personal email address
    to_email = 'your_personal_email@example.com'

    subject = 'ChristopherBare.github.io - Donate Message'

    # Send the email
    response = ses.send_email(
        Source=from_email,
        Destination={
            'ToAddresses': [to_email],
        },
        Message={
            'Subject': {
                'Data': subject,
            },
            'Body': {
                'Text': {
                    'Data': message,
                },
            },
        },
        # Set "Reply-To" to the email from the event body
        ReplyToAddresses=[email]
    )

    return {
        'statusCode': 200,
        'body': json.dumps('Email sent successfully.')
    }
