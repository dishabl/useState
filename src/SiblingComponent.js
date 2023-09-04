import React, { useState } from "react";

function SiblingComponent({ text1 }) {
  let [text, setText] = useState(`${text1}`);

  return (
    <div>
      <p>Текущий текст: {text}</p>
      <button onClick={() => setText("REDEV")}>Изменить текст</button>
    </div>
  );
}

export default SiblingComponent;
