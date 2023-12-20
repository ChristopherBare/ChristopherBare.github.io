import React from 'react';
import { SiteColors } from '../styles/styles'; // Assuming SiteColors is the interface for your siteColors object

interface PortfolioProps {}

const Portfolio: React.FC<PortfolioProps> = () => {
    const siteColors: SiteColors = {
        // Define your site colors here if it's not already imported as an object
        // bg: '#112340',
        // ... rest of the colors
    };

    return (
        <header className="App-header" id="portfolio">
            <div className="Header justify-content-end" style={{ fontFamily: 'NotoMono-Regular' }}>
                <h1>This is the portfolio page.</h1>
                <p style={{ color: siteColors.green }}>hello, friend.</p>
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
};

export default Portfolio;
