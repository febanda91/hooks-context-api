import React, { useState } from "react";

function App() {
  const [fruit, setFruit] = useState("apple");

  const handleChange = e => {
    setFruit("orange");
  };

  return (
    <div>
      {fruit}
      <button onClick={() => handleChange()}>Change Fruit</button>
    </div>
  );
}

export default App;
