import './App.css'
import NavBar from "./navbar/navbar.tsx";
import Welcome from "./welcome/welcome.tsx";
import About from "./about/about.tsx";
import Resume from "./resume/resume.tsx";
import Portfolio from "./portfolio/portfolio.tsx";
import Contact from "./contact/contact.tsx";
import Donate from "./donate/donate.tsx";

function App() {
  return (
      <div class="App">
          <NavBar/>
          <Welcome/>
          <About/>
          <Resume/>
          <Portfolio/>
          <Contact/>
          <Donate/>
      </div>
  )
}

export default App
