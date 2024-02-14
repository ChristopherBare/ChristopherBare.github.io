import React from 'react';
import logo from '../logo.svg';
import '../styles/navbar.css';
//TODO restyle the bavbar


interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = () => {
    return (
        <Navbar expand="lg" class="Navbar" sticky="top">
            <Container fluid>
                <Navbar.Brand class="Navbar-logo" href="#home">
                    <img src={logo} class="App-logo d-inline-block align-top" alt="logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav class="justify-content-end">
                        <Nav.Link href="#home" class="text-white">
                            Home
                        </Nav.Link>
                        <Nav.Link href="#about" class="text-white">
                            About
                        </Nav.Link>
                        <Nav.Link href="#resume" class="text-white">
                            Resume
                        </Nav.Link>
                        <Nav.Link href="#portfolio" class="text-white">
                            Portfolio
                        </Nav.Link>
                        <Nav.Link href="#contact" class="text-white">
                            Contact
                        </Nav.Link>
                        <Nav.Link href="#donate" class="text-white">
                            Donate
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;
