import MoleContainer from './components/MoleContainer'
import { useState } from 'react';

import './App.css';

function App() {
  let [score, setScore] = useState(0)


  const createMoleHill = (numHills = 9) => {
    let hills = [];
    for (let i = 0; i < numHills; i++) {
      hills.push(
        <MoleContainer
          key={i}
          setScore={setScore}
          score={score}

        />
      );
    }
    return (
      <div>
        {hills}
      </div>
    )
  }


  return (
    <div className="App">
      {score}
      {createMoleHill()}
    </div>
  );
}

export default App;
