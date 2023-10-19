// Header.js
import {siteColors} from '../styles/styles'

function Contact() {
    return (
        <header className="App-header" id="contact">
            <div className="Header justify-content-end" style={{fontFamily: 'NotoMono-Regular'}}>
                <h1>This is the contact form.</h1>
                <p style={{color: siteColors.green}}>hello, friend.</p>
            </div>
        </header>
    );
}

export default Contact;


