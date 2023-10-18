// Header.js
import {siteColors} from '../styles/styles'

function Header() {
    return (
        <header className="App-header">
            <div className="Header">
                <p style={{color: siteColors.green}}>Hi, my name is</p>
                <h1>Christopher Bare</h1>
                <h2></h2>
                <p><span style={{color: siteColors.green}}>I&lsquo;m a </span>Senior Software Engineer</p>
            </div>
        </header>
    );
}

export default Header;
