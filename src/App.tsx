import React from "react";
import { useAge } from "./hooks";

function App() {
  const { getAge, resetAge } = useAge();

  return (
    <div className="App">
      <p>Last Updated: {getAge()}</p>
      <button onClick={resetAge}>Reset Timer</button>
    </div>
  );
}

export default App;
