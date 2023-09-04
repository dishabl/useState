import React from "react";

function ChildComponent({ name, counter }) {
  return (
    <div>
      <br></br>
      <p>
        Привет, {name}! Текущий счетчик: {counter}
      </p>
    </div>
  );
}

export default ChildComponent;
