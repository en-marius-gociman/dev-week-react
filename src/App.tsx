import './App.css';
import { CounterContextProvider } from './store/CounterContext';
import { Counter } from './Counter';

function App() {
  return (
    <CounterContextProvider>
      <div className='App'>
        <Counter />
      </div>
    </CounterContextProvider>
  );
}

export default App;

