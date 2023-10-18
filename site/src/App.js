import './App.css';
import NavBar from './navbar/navbar'; // Import the Navbar component
import Welcome from './welcome/welcome';
import About from "./about/about";

function App() {
    return (
        <div className="App">
            <NavBar/>
            <Welcome/>
            <About/>
        </div>
    );
}

export default App;
