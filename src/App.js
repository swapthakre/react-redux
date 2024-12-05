import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from './store/actions';
import './App.css';

function App() {
  const dispatch = useDispatch();

  const value = useSelector(state => state.value);

  const handleIncrement = () => {
    dispatch(increment(2)); 
  };

  const handleDecrement = () => {
    dispatch(decrement(1)); 
  };

  return (
    <div className="App">
      <h1>{value}</h1>
      <button onClick={handleIncrement}>Increment by 2</button>
      <button onClick={handleDecrement}>Decrement by 1</button>
    </div>
  );
}

export default App;
