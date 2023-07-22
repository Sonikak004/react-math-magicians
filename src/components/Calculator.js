import React, { useState } from 'react';
import PropTypes from 'prop-types';
import calculate from '../logic/calculate';
import './Calculator.css';

export default function Calculator() {
  const initialCalculatorState = {
    next: null,
    operation: null,
    total: null,
  };

  const Button = ({ value, className, handleClick }) => (
    <button
      type="button"
      name={value}
      className={className}
      onClick={handleClick}
    >
      {value}
    </button>
  );

  Button.propTypes = {
    value: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    handleClick: PropTypes.func.isRequired,
  };

  const [nextValue, setNextValue] = useState(initialCalculatorState.next);
  const [operationValue, setOperationValue] = useState(initialCalculatorState.operation);
  const [totalValue, setTotalValue] = useState(initialCalculatorState.total);

  const handleButtonClick = (e) => {
    const { name } = e.target;
    const
      newState = calculate({ next: nextValue, operation: operationValue, total: totalValue }, name);
    setNextValue(newState.next);
    setOperationValue(newState.operation);
    setTotalValue(newState.total);
  };

  return (
    <div className="calculator">
      <div className="keypad">
        <div className="row">
          <div className="display">{nextValue || operationValue || totalValue || 0}</div>
        </div>
        <div className="row">
          <Button className="item" value="AC" handleClick={handleButtonClick} />
          <Button className="item" value="+/-" handleClick={handleButtonClick} />
          <Button className="item" value="%" handleClick={handleButtonClick} />
          <Button className="item it-color" value="÷" handleClick={handleButtonClick} />
        </div>
        <div className="row">
          <Button className="item" value="7" handleClick={handleButtonClick} />
          <Button className="item" value="8" handleClick={handleButtonClick} />
          <Button className="item" value="9" handleClick={handleButtonClick} />
          <Button className="item it-color" value="x" handleClick={handleButtonClick} />
        </div>
        <div className="row">
          <Button className="item" value="4" handleClick={handleButtonClick} />
          <Button className="item" value="5" handleClick={handleButtonClick} />
          <Button className="item" value="6" handleClick={handleButtonClick} />
          <Button className="item it-color" value="-" handleClick={handleButtonClick} />
        </div>
        <div className="row">
          <Button className="item" value="1" handleClick={handleButtonClick} />
          <Button className="item" value="2" handleClick={handleButtonClick} />
          <Button className="item" value="3" handleClick={handleButtonClick} />
          <Button className="item it-color" value="+" handleClick={handleButtonClick} />
        </div>
        <div className="row">
          <Button className="item" value="0" handleClick={handleButtonClick} />
          <Button className="item" value="." handleClick={handleButtonClick} />
          <Button className="item it-color" value="=" handleClick={handleButtonClick} />
        </div>
      </div>
    </div>
  );
}
