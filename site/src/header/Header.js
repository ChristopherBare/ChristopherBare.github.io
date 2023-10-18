// Header.js
import {siteColors} from '../styles/styles'

function Header() {
    return (
        <header className="App-header">
            <div className="Header">
                <p style={{color: siteColors.green}}>Hi, my name is:</p>
                <h1>Christopher Bare</h1>
                <h2><span style={{color: siteColors.green}}>I&lsquo;m a </span>Senior Software Engineer</h2>
                <p>I convert caffeine into software.</p>
            </div>
        </header>
    );
}

export default Header;
