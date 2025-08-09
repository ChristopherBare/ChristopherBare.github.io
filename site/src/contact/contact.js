import { siteColors } from '../styles/styles';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { useState } from 'react';

function Contact() {
    const [formData, setFormData] = useState({
        email: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            // Get the API Gateway URL from your Terraform output
            const apiUrl = `${aws_api_gateway_deployment.deployment.invoke_url}/v1`;
            
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            console.log('Success:', data);
            setSubmitStatus('success');
            setFormData({ message: '', email: '' });
        } catch (error) {
            console.error('Error:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <header className="App-header" id="contact">
            <Container style={{ width: '40rem' }}>
                <div className="Header" style={{ fontFamily: 'NotoMono-Regular' }}>
                    <h3 style={{ color: siteColors.green }}>send me a message.</h3>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="md form" controlId="exampleForm.ControlInput1">
                            <Form.Label style={{ fontSize: "1.3rem" }}>email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="name@example.com"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="md form" controlId="exampleForm.ControlTextarea1">
                            <Form.Label style={{ fontSize: "1.3rem" }}>message</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={6}
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                required
                            />
                        </Form.Group>
                        <br />
                        <div className="d-grid gap-2">
                            <Button 
                                size="lg" 
                                variant="outline-success" 
                                type="submit"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Sending...' : 'Send'}
                            </Button>
                        </div>
                        {submitStatus === 'success' && (
                            <div className="mt-3 text-success">
                                Message sent successfully!
                            </div>
                        )}
                        {submitStatus === 'error' && (
                            <div className="mt-3 text-danger">
                                Failed to send message. Please try again.
                            </div>
                        )}
                    </Form>
                </div>
            </Container>
        </header>
    );
}

export default Contact;