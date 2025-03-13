import { useState } from "react";
import Heading from "./components/Heading";
import Section from "./components/Section";
import Counter from "./components/counter";
import List from "./components/List";

function App() {
  const [count, setCount] = useState<number>(0);
  return (
    <>
      <Heading title="Goodbye Space" />
      <Section title="different title">This is my section</Section>
      <Counter setCount={setCount}>Count is {count}</Counter>
      <List
        items={["coffe", "tacos", "code"]}
        render={(item: string) => <div className="gold">{item}</div>}
      />
    </>
  );
}

export default App;
