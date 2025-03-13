import {
  MouseEvent,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

interface User {
  id: number;
  username: string;
}

type fibFunc = (n: number) => number;
const fib: fibFunc = (n) => {
  if (n < 2) return n;
  return fib(n - 1) + fib(n - 2);
};

const myNumb: number = 37;

function Hooks() {
  const [count, setCount] = useState<number>(0);
  const [users, setUsers] = useState<User[] | null>(null);

  const inputRef = useRef<HTMLInputElement>(null);

  console.log(inputRef?.current);
  console.log(inputRef?.current?.value);

  const addTwo = useCallback(
    (e: MouseEvent<HTMLButtonElement> | KeyboardEvent) =>
      setCount((prev) => prev + 2),
    []
  );

  const result = useMemo<number>(() => fib(myNumb), [myNumb]);

  useEffect(() => {
    console.log(users);
  }, [users]);
  return (
    <div>
      <h1>{count}</h1>
      <h2>{result}</h2>
      <input type="text" ref={inputRef} />

      <button onClick={addTwo}>Add</button>
    </div>
  );
}

export default Hooks;
