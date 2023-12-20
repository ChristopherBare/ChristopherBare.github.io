// Header.js
import {siteColors} from '../styles/styles'

function Portfolio() {
    return (
        <header className="App-header" id="portfolio">

            <div className="Header justify-content-end" style={{fontFamily: 'NotoMono-Regular'}}>
                <h1>This is the portfolio page.</h1>
                <p style={{color: siteColors.green}}>hello, friend.</p>
                <div className="carousel carousel-center rounded-box">
                    <div className="carousel-item">
                        <div className="card">
                            <div className="card-body">
                                <h1 className="card-title">HI</h1>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <h1 className="card-title">HI</h1>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <h1 className="card-title">HI</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Portfolio;
