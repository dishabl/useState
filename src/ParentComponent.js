import ChildComponent from "./ChildComponent";
import SiblingComponent from "./SiblingComponent";
import React, { useState } from "react";
function ParentComponent() {
  let [counter, setValue] = useState(0);
  let increment = () => setValue(counter + 1);
  let reset = () => setValue(0);
  let decrement = () => counter > 0 && setValue(counter - 1);
  let random = () => setValue(Math.floor(Math.random() * 10) + 1);

  return (
    <div>
      <h2>Счетчик: {counter}</h2>
      <button onClick={increment}>Увеличить</button>
      <button onClick={reset}>Сбросить</button>
      <button onClick={random}>Случайное значение</button>
      <button onClick={decrement}>Уменьшить</button>
      <ChildComponent name="Дима" counter={counter} />
      <SiblingComponent text1="пока не REDEV" />
    </div>
  );
}

export default ParentComponent;
