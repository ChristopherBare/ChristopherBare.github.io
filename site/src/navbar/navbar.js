// Navbar.js
import logo from '../logo.svg';
import '../styles/navbar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
    return (
        <Navbar collapseOnSelect expand="lg" className="Navbar">
            <Container>
                <Navbar.Brand className="Navbar-logo">
                    <img src={logo} className="App-logo" alt="logo" />
                </Navbar.Brand>
            </Container>

        </Navbar>
        );
}

export default Navbar;
