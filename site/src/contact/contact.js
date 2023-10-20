// Header.js
import {siteColors} from '../styles/styles'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function Contact() {
    return (
        <header className="App-header" id="contact">
            <div className="Header" style={{fontFamily: 'NotoMono-Regular'}}>
                <h3 style={{color: siteColors.green}}>send me a message.</h3>
                <Form style={{ width: '200%'}}>
                    <Form.Group className="md" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>
                    <Form.Group className="mb-6" controlId="exampleForm.ControlTextarea1">
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


