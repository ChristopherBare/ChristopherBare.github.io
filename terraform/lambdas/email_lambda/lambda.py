import json
import boto3

ses = boto3.client('ses', region_name='us-east-1')  

def lambda_handler(event, context):
    # Parse the event data from the API Gateway trigger
    body = json.loads(event['body'])
    email = body['email']
    message = body['message']

    #  SES-verified email address
    from_email = 'christopherbare@outlook.com'

    # personal email address
    to_email = 'christopherbare@outlook.com'

    subject = 'ChristopherBare.github.io - Contact Message'

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
