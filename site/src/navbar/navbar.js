// Navbar.js
import logo from '../logo.svg';
import '../styles/navbar.css';

function Navbar() {
    return (
        <nav className="Navbar">
            <div className="Navbar-logo">
                <img src={logo} className="App-logo" alt="logo" />
            </div>
            <p className="Navbar-title">
                Home
            </p>
        </nav>
        );
}

export default Navbar;
