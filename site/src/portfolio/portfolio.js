// Header.js
import {siteColors} from '../styles/styles'

function Portfolio() {
    return (
        <header className="App-header" id="portfolio">
            <div className="Header justify-content-end" style={{fontFamily: 'NotoMono-Regular'}}>
                <h1>This is the portfolio page.</h1>
                <p style={{color: siteColors.green}}>hello, friend.</p>
                <div className="carousel carousel-center rounded-box">
                    <h1>carousel</h1>
                    <div className="carousel-item">
                        <img src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" alt="Pizza" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg" alt="Pizza" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg" alt="Pizza" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg" alt="Pizza" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg" alt="Pizza" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg" alt="Pizza" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg" alt="Pizza" />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Portfolio;
