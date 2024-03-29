// Navbar.js
import logo from '../logo.svg';
import '../styles/navbar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
    return (
        <Navbar expand="lg" className="Navbar" sticky="top">
            <Container fluid>
                <Navbar.Brand className="Navbar-logo" href="#home">
                    <img src={logo} className="App-logo d-inline-block align-top" alt="logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="justify-content-end">
                        <Nav.Link href="#home" className="text-white">Home</Nav.Link>
                        <Nav.Link href="#about" className="text-white">About</Nav.Link>
                        <Nav.Link href="#resume" className="text-white">Resume</Nav.Link>
                        <Nav.Link href="#portfolio" className="text-white">Portfolio</Nav.Link>
                        <Nav.Link href="#contact" className="text-white">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        );
}

export default NavBar;
