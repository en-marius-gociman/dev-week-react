import { useContext } from 'react';
import './Counter.css';
import CounterContext from './store/CounterContext';

export const Counter: React.FC = () => {
  const { count, addOne, subtractOne, reset } = useContext(CounterContext);
  return (
    <>
      <header className='counter-container'>
        <h1>React counter</h1>
        <h1>{count}</h1>
      </header>
      <header className='button-container'>
        <button className='button' onClick={subtractOne}>
          -
        </button>
        <button className='button' onClick={reset}>
          Reset
        </button>
        <button className='button' onClick={addOne}>
          +
        </button>
      </header>
    </>
  );
};
