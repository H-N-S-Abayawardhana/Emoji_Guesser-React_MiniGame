
import React from 'react';
import './styles.css';


const EmojiCard = ({ emoji, options, onAnswer, disabled }) => {
  return (
    <div className="emoji-card">
      <div className="emoji">{emoji}</div>
      <div className="options">
        {options.map((option, index) => (
          <button 
            key={index} 
            onClick={() => onAnswer(option)}
            disabled={disabled}
            className="option-btn"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default EmojiCard;