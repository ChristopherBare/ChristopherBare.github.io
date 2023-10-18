// Header.js
import {siteColors} from '../styles/styles'

function About() {
    return (
        <header className="App-header" id="about">
            <div className="Header justify-content-end" style={{fontFamily: 'NotoMono-Regular'}}>
                <h1>This is the about page.</h1>
                <p style={{color: siteColors.green}}>hello, friend.</p>

            </div>
        </header>
    );
}

export default About;
