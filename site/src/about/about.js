// Header.js
import {siteColors} from '../styles/styles'

function About() {
    return (
        <header className="App-header" id="about">
            <div className="Header" style={{fontFamily: 'NotoMono-Regular'}}>
                <h1 className="justify-content-start">About Me</h1>
                <p style={{color: siteColors.green}}>hello, friend.</p>
                <p>some stuff about me</p>
                <p>some stuff about me</p>
                <p>some stuff about me</p>
                <p>some stuff about me</p>
                <p>some stuff about me</p>
                <p>some stuff about me</p>
                <p>some stuff about me</p>
                <p>some stuff about me</p>
                <p>some stuff about me</p>
            </div>
        </header>
    );
}

export default About;
