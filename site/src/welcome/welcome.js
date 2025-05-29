// Header.js
import {siteColors} from '../styles/styles'

function Welcome() {
    return (
        <header className="App-header" id="home">
            <div className="Header justify-content-end" style={{fontFamily: 'NotoMono-Regular'}}>
                <p style={{color: siteColors.green}}>Hi, my name is:</p>
                <h1 style={{fontSize: '6rem'}}>Christopher Bare</h1>
                <h2><span style={{color: siteColors.green}}>I&lsquo;m a </span>Senior Software Engineer</h2>
                <p><span style={{color: siteColors.green}}>I </span>convert caffeine into code.</p>
            </div>
        </header>
    );
}

export default Welcome;
