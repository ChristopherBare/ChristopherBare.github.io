import './App.css';
import Navbar from './navbar/navbar'; // Import the Navbar component
import Header from './header/Header';

function App() {
  return (
    <div className="App">
      <Navbar /> {/* Include the Navbar component here */}
      <header className="App-header">
        {/* Content for your main page */}
        <Header />
      </header>
    </div>
    );
}

export default App;
