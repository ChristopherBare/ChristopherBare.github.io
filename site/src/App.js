import './App.css';
import NavBar from './navbar/navbar';
import Welcome from './welcome/welcome';
import About from "./about/about";
import Resume from "./resume/resume";
import Portfolio from "./portfolio/portfolio";
import Contact from "./contact/contact";
import Donate from "./donate/donate";

function App() {
    return (
        <div className="App">
            <NavBar/>
            <Welcome/>
            <About/>
            <Resume/>
            <Portfolio/>
            <Contact/>
            <Donate/>
        </div>
    );
}

export default App;
