// Header.js
import {siteColors} from '../styles/styles'
import {Col, Row} from "react-bootstrap";
import Container from "react-bootstrap/Container";

function About() {
    return (
        <header className="App-header" id="about">
            <div className="Header" style={{fontFamily: 'NotoMono-Regular'}}>
                <h1 style={{color: siteColors.green}} className="justify-content-start">About Me</h1>
                <p style={{color: siteColors.green, fontSize: "18px"}}>hello, friend.</p>
                <Container style={{fontSize: "1.5rem"}} className="text-start">
                <p>My name is Chris and I like to make things that I&lsquo;m passionate about. Things that I feel are
                    genuinely
                    cool. I started my technology journey back in 2008 when I got my first laptop my freshmen year of
                    high school. With it, I started to explore everything that was out there. I stumbled upon an article
                    of how to put a distribution of linux into a virtual machine. I was hooked after that. I started
                    learning everything I could about how unix worked and how to write bash scripts to do things that I
                    wanted to do. I didn&lsquo;t even realize that I had started to learn how to code.</p>
                <p>Fast-forward to the present, I&lsquo;ve had the opportunity to work at many different companies with
                    very
                    different goals in mind. My current focus is to build as many things as I can and keep my skills
                    sharp so that when I see an idea come along that&lsquo;s worth pursuing, I will be the one to help
                    bring
                    it to life. </p>
                <p>Here are a few of my favorite technologies that I work with regularly:</p></Container>
                <Container style={{fontSize:"1.2rem", color: siteColors.green}}>
                    <Row className="justify-content-center">
                        <Col xs={3} className="text-start">
                            <ul>
                                <li>Terraform</li>
                                <li>AWS</li>
                                <li>Python</li>
                                <li>Golang</li>
                                <li>Node.js</li>
                                <li>Ruby</li>
                            </ul>
                        </Col>
                        <Col xs={1} className="text-start">
                            <ul>
                                <li>React</li>
                                <li>Angular</li>
                                <li>Mithril.js</li>
                                <li>GraphQL</li>
                                <li>Django</li>
                                <li>Rails</li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </div>
        </header>
);
}

export default About;
