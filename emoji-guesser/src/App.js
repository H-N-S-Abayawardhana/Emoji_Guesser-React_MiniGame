import React, { useState, useEffect } from 'react';
import EmojiCard from './EmojiCard';
import Result from './Result';
import emojiData from './data';
import './styles.css';

function App() {
  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [shuffledOptions, setShuffledOptions] = useState([]);

 
  useEffect(() => {
    if (gameOver) return;
    
 
    const currentQuestion = emojiData[currentQuestionIndex];
    const shuffled = [...currentQuestion.options].sort(() => 0.5 - Math.random());
    setShuffledOptions(shuffled);
  }, [currentQuestionIndex, gameOver]);

  
  const handleAnswer = (selectedOption) => {
    const currentQuestion = emojiData[currentQuestionIndex];
    const correct = selectedOption === currentQuestion.correct;
    
 
    if (correct) {
      setScore(score + 1);
    }
    
    
    setIsCorrect(correct);
    setShowFeedback(true);
    
   
    setTimeout(() => {
      setShowFeedback(false);
      

      if (currentQuestionIndex < emojiData.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        setGameOver(true);
      }
    }, 1000);
  };

  // Reset the game to start over
  const restartGame = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setGameOver(false);
    setShowFeedback(false);
  };

  return (
    <div className="app">
      <h1>AI Emoji Guesser</h1>
      
      {!gameOver ? (
        <div className="game-container">
          <div className="progress">
            Question {currentQuestionIndex + 1}/{emojiData.length}
          </div>
          
          <EmojiCard 
            emoji={emojiData[currentQuestionIndex].emoji}
            options={shuffledOptions}
            onAnswer={handleAnswer}
            disabled={showFeedback}
          />
          
          {showFeedback && (
            <div className={`feedback ${isCorrect ? 'correct' : 'wrong'}`}>
              {isCorrect ? 'Correct! ✅' : 'Wrong! ❌'}
            </div>
          )}
          
          <div className="score-display">
            Score: {score}
          </div>
        </div>
      ) : (
        <Result 
          score={score} 
          total={emojiData.length} 
          onRestart={restartGame} 
        />
      )}
    </div>
  );
}

export default App;