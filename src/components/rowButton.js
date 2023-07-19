import React from 'react';

function ButtonRow() {
  return (
    <div className="keypad">

      <div className="row">
        <button className="button" type="button">AC</button>
        <button className="button" type="button">+/-</button>
        <button className="button" type="button">%</button>
        <button className="button right-but" type="button">+</button>
      </div>
      <div className="row">
        <button className="button" type="button">7</button>
        <button className="button" type="button">8</button>
        <button className="button" type="button">9</button>
        <button className="button right-but" type="button">*</button>
      </div>
      <div className="row">
        <button className="button" type="button">4</button>
        <button className="button" type="button">5</button>
        <button className="button" type="button">6</button>
        <button className="button right-but" type="button">-</button>
      </div>
      <div className="row">
        <button className="button" type="button">1</button>
        <button className="button" type="button">2</button>
        <button className="button" type="button">3</button>
        <button className="button right-but" type="button">+</button>
      </div>
      <div className="row">
        <button className="button bottom-button" type="button">0</button>
        <button className="button" type="button">.</button>
        <button className="button right-but" type="button">=</button>
      </div>
    </div>
  );
}

export default ButtonRow;
