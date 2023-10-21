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

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior

        // Access the form data in the formData state
        const { email, message } = formData;

        // You can now perform any action with the form data, such as sending it to your server.
        //TODO add logic to send email with lambda here
        console.log('Form Data:', { email, message });

        //clear out the form again
        setFormData({message: '', email: ''})
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
                            />
                        </Form.Group>
                        <br />
                        <div className="d-grid gap-2">
                            <Button size="lg" variant="outline-success" type="submit">Send</Button>
                        </div>
                    </Form>
                </div>
            </Container>
        </header>
        );
}

export default Contact;
