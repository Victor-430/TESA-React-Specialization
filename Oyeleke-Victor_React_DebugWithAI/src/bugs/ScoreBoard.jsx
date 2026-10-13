import { useState } from 'react';

export default function ScoreBoard() {
  const [score, setScore] = useState(0);

  const addThree = () => {
    setScore(prev => prev + 1);
    setScore(prev => prev + 1);
    setScore(prev => prev + 1);
  };

  return (
    <div>
      <h2>Score: {score}</h2>
      <button onClick={addThree}>+3</button>
      <button onClick={() => setScore(0)}>Reset</button>
    </div>
  );
}