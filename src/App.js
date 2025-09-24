import React from 'react';
import './App.css';
import logo from './img/raiderlotto.png';
import rick from './img/rick.gif';
import RaffleDrawing from './RaffleDrawing';

function App() {
  return (
    <div className="App">
      <img alt="" src={logo} width={200} height={200} />
      <img alt="" src={rick} width={200} height={200} />
      <img alt="" src={rick} width={200} height={200} />
      <img alt="" src={rick} width={200} height={200} />
      <img alt="" src={rick} width={200} height={200} />
      <img alt="" src={rick} width={200} height={200} />
      <img alt="" src={rick} width={200} height={200} />
      <RaffleDrawing />
    </div>
  );
}

export default App;
