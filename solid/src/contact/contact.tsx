import React, { useState, ChangeEvent, FormEvent } from 'react';
import {siteColors} from "../styles/styles.ts";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

interface ContactProps {}

interface FormData {
    email: string;
    message: string;
}

const Contact: React.FC<ContactProps> = () => {
    const [formData, setFormData] = useState<FormData>({
        email: '',
        message: '',
    });

    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const { email, message } = formData;

        console.log('Form Data:', { email, message });

        setFormData({ ...formData, message: '', email: '' });
    };

    return (
        <header class="App-header" id="contact">
            <Container style={{ width: '40rem' }}>
                <div class="Header" style={{ fontFamily: 'NotoMono-Regular' }}>
                    <h3 style={{ color: siteColors.green }}>send me a message.</h3>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group class="md form" controlId="exampleForm.ControlInput1">
                            <Form.Label style={{ fontSize: '1.3rem' }}>email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="name@example.com"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                        <Form.Group class="md form" controlId="exampleForm.ControlTextarea1">
                            <Form.Label style={{ fontSize: '1.3rem' }}>message</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={6}
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                        <br />
                        <div class="d-grid gap-2">
                            <Button size="lg" variant="outline-success" type="submit">
                                Send
                            </Button>
                        </div>
                    </Form>
                </div>
            </Container>
        </header>
    );
};

export default Contact;
