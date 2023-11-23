import './App.css';
import { CounterContextProvider } from './store/CounterContext';
import { Counter } from './Counter';

function App() {
  return (
    <CounterContextProvider>
      <div className='App'>
        <Counter initialValue={5} />
      </div>
    </CounterContextProvider>
  );
}

export default App;

