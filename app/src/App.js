import logo from './logo.svg';
import './App.css';
import Api from './api';

function App() {
  function invokeLambda(e) {
    e.preventDefault();
    console.log('About to invoke the lambda!');
    Api.invokeLambda();
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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

        <button onClick={invokeLambda}>
          Invoke Lambda
        </button>
      </header>
    </div>
  );
}

export default App;
