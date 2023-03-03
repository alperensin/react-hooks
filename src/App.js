import logo from './logo.svg';
import './App.css';
import HookUseState from './hooks-example/HookUseState';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <HookUseState />
    </div>
  );
}

export default App;
