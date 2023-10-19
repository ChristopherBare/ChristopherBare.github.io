// Header.js
import {siteColors} from '../styles/styles'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function Contact() {
    return (
        <header className="App-header" id="contact">
            <div className="Header justify-content-end" style={{fontFamily: 'NotoMono-Regular'}}>
                <h1>Send me a message</h1>
                <p style={{color: siteColors.green}}>hello, friend.</p>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" rows={6} />
                    </Form.Group>
                </Form>
                <Button className="btn btn-lg btn-primary">Send</Button>
            </div>
        </header>
    );
}

export default Contact;


