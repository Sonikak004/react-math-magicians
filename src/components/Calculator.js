import './Calculator.css';
import React from 'react';
import ButtonRow from './rowButton';

function Calculator() {
  return (
    <div className="calculator">
      <div className="display">0</div>
      <ButtonRow />
    </div>
  );
}

export default Calculator;
