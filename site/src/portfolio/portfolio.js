// Header.js
import {siteColors} from '../styles/styles'

function Portfolio() {
    return (
        <header className="App-header" id="portfolio">
            <div className="Header justify-content-end" style={{fontFamily: 'NotoMono-Regular'}}>
                <h1>This is the portfolio page.</h1>
                <p style={{color: siteColors.green}}>hello, friend.</p>
            </div>
        </header>
    );
}

export default Portfolio;
