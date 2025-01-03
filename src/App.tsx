import React from 'react';
import './App.css';
import Application from './component/application/application';
import IncrementButton from './component/incrementButton/incrementButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Application/>
        <div>
          <IncrementButton/>
        </div>
      </header>
    </div>
  );
}

export default App;
