import React from 'react';
import {siteColors} from "../styles/styles.ts";
import { Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';

interface AboutProps {}

const About: React.FC<AboutProps> = () => {
    return (
        <header class="App-header" id="about">
            <div class="Header" style={{ fontFamily: 'NotoMono-Regular' }}>
                <h1 style={{ color: siteColors.green }} class="justify-content-start">
                    About Me
                </h1>
                <p style={{ color: siteColors.green, fontSize: '18px' }}>hello, friend.</p>
                <Container style={{ fontSize: '1.5rem' }} class="text-start">
                    {/* Content */}
                </Container>
                <Container style={{ fontSize: '1.2rem', color: siteColors.green }}>
                    <Row class="justify-content-center">
                        <Col xs={3} class="text-start">
                            {/* Left Column */}
                            <ul>
                                {/* List items */}
                            </ul>
                        </Col>
                        <Col xs={1} class="text-start">
                            {/* Right Column */}
                            <ul>
                                {/* List items */}
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </div>
        </header>
    );
};

export default About;
