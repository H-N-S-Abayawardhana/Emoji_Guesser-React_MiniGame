import React from 'react';
import './styles.css';

const Result = ({ score, total, onRestart }) => {
  return (
    <div className="result-card">
      <h2>Game Over!</h2>
      <p>You scored <span className="score">{score}</span> out of {total}</p>
      <button onClick={onRestart} className="restart-btn">Play Again</button>
    </div>
  );
};

export default Result;