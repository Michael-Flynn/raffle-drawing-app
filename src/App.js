import React from 'react';
import './App.css';
import logo from './img/raiderlotto.png';
import RaffleDrawing from './RaffleDrawing';

function App() {
  return (
    <div className="App">
      <img alt="" src={logo} width={300} height={300} />
      <RaffleDrawing />
    </div>
  );
}

export default App;
