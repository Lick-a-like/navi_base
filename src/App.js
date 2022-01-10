// import logo from './logo.svg';
import logo_01 from './logo_01.svg';
import Gnb from './Gnb';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo_01} className="App-logo" alt="logo" />
        <Gnb navilength="4"></Gnb>
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
