import logo from './logo.svg';
import './App.css';

import HookUseState from './hooks-example/HookUseState';
import HookUseEffect from './hooks-example/HookUseEffect';
import HookUseContext from './hooks-example/HookUseContext';
import HookUseReducer from './hooks-example/HookUseReducer';
import HookUseCallback from './hooks-example/HookUseCallback';
import HookUseMemo from './hooks-example/HookUseMemo';
import HookUseRef from './hooks-example/HookUseRef';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <HookUseState />
      <HookUseEffect />
      <HookUseContext />
      <HookUseReducer />
      <HookUseCallback />
      <HookUseMemo />
      <HookUseRef />
    </div>
  );
}

export default App;
