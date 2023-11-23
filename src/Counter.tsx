import { useContext, useEffect } from 'react';
import './Counter.css';
import CounterContext from './store/CounterContext';

interface ICounterProps {
  initialValue?: number;
}

export const Counter: React.FC<ICounterProps> = ({ initialValue }) => {
  const { count, addOne, subtractOne, reset, setValue } = useContext(CounterContext);

  const setCounterValue = () => initialValue && setValue && setValue(initialValue);

  useEffect(() => {
    setCounterValue();
  }, []);

  return (
    <>
      <header className='counter-container'>
        <h1>React counter</h1>
        <h1>{count}</h1>
      </header>
      <header className='button-container'>
        <button onClick={subtractOne}>-</button>
        <button onClick={initialValue ? setCounterValue : reset}>Reset</button>
        <button onClick={addOne}>+</button>
      </header>
    </>
  );
};
