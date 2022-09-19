import React from 'react';
import { useAge } from './hooks';

function App() {
  /* make whichever changes you deem necessary in this function */

  // you will probably want to call the hook here: const ...  = useAge();

  // you will want to replace the following line
  const theTimeThatPassed = "???";

  return (
    <div className="App">
      <p>
        Last Updated: {theTimeThatPassed}
      </p>
      {/* You will need to add a button here */}
    </div>
  );
}

export default App;
