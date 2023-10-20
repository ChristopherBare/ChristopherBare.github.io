// Header.js
import {siteColors} from '../styles/styles'
import '../styles/contact.css'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'

function Contact() {
    return (
        <header className="App-header" id="contact">
            <Container style={{ width: '40rem'}}>
            <div className="Header" style={{fontFamily: 'NotoMono-Regular'}}>
                <h3 style={{color: siteColors.green}}>send me a message.</h3>
                <Form>
                    <Form.Group className="md form" controlId="exampleForm.ControlInput1">
                        <Form.Label style={{fontSize: "1.3rem"}}>email address</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>
                    <Form.Group className="md form" controlId="exampleForm.ControlTextarea1">
                        <Form.Label style={{fontSize: "1.3rem"}}>message</Form.Label>
                        <Form.Control as="textarea" rows={6} />
                    </Form.Group>
                </Form>
                <br/>
                <div className="d-grid gap-2">
                    <Button size="lg" variant="outline-success">Send</Button>
                </div>

            </div>
            </Container>
        </header>
    );
}

export default Contact;


