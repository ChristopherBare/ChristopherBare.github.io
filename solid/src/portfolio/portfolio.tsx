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
        <header class="App-header" id="portfolio">
            <div class="Header justify-content-end" style={{ fontFamily: 'NotoMono-Regular' }}>
                <h1>This is the portfolio page.</h1>
                <p style={{ color: siteColors.green }}>hello, friend.</p>
                <div class="carousel carousel-center rounded-box">
                    <div class="carousel-item">
                        <div class="card">
                            <div class="card-body">
                                <h1 class="card-title">HI</h1>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-body">
                                <h1 class="card-title">HI</h1>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-body">
                                <h1 class="card-title">HI</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Portfolio;
