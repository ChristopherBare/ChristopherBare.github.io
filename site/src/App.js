import './App.css';
import NavBar from './navbar/navbar';
import Welcome from './welcome/welcome';
import About from "./about/about";
import Portfolio from "./portfolio/portfolio";
import Contact from "./contact/contact";

function App() {
    return (
        <div className="App">
            <NavBar/>
            <Welcome/>
            <About/>
            <Portfolio/>
            <Contact/>
        </div>
    );
}

export default App;
