import logo from './logo.svg';
import Chicken from '.Chicken.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={Chicken} className="App-logo" alt="logo" />
        <p>
          Frederik Sommer Brondum. -- YESSIR
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
