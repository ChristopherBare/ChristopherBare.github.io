import './App.css';
import NavBar from './navbar/navbar'; // Import the Navbar component
import Header from './header/Header';

function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        {/* Content for your main page */}
        <Header />
      </header>
    </div>
    );
}

export default App;
