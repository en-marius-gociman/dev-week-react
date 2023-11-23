import { ReactNode, createContext, useState } from 'react';
type IProps = {
  children: ReactNode;
};

type CounterContextType = {
  addOne?: () => void;
  subtractOne?: () => void;
  reset?: () => void;
  setValue?: (value: number) => void;
  count: number;
};

const CounterContext = createContext<CounterContextType>({ count: 0 });

export const CounterContextProvider = ({ children }: IProps) => {
  const [count, setCount] = useState<number>(0);

  const addOne = () => {
    setCount((prevVal) => (prevVal += 1));
  };

  const subtractOne = () => {
    setCount((prevVal) => (prevVal >= 1 ? (prevVal -= 1) : prevVal));
  };

  const reset = () => {
    setCount(0);
  };

  const setValue = (value: number) => {
    value >= 0 && setCount(value);
  };

  return <CounterContext.Provider value={{ count, addOne, subtractOne, reset, setValue }}>{children}</CounterContext.Provider>;
};

export default CounterContext;
