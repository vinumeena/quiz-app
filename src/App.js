import React, { useState } from "react";
import "./App.css";

const quizData = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Lisbon"],
    answer: "Paris",
  },
  {
    question: "Who wrote 'Hamlet'?",
    options: ["Leo Tolstoy", "William Shakespeare", "Mark Twain", "J.K. Rowling"],
    answer: "William Shakespeare",
  },
  {
    question: "What is the largest planet in our solar system?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    answer: "Jupiter",
  },
  {
    question: "What is the boiling point of water?",
    options: ["90°C", "100°C", "80°C", "120°C"],
    answer: "100°C",
  },
  {
    question: "Which element is denoted by 'O' in the periodic table?",
    options: ["Oxygen", "Osmium", "Oxalate", "Oganesson"],
    answer: "Oxygen",
  },
  {
    question: "What is the smallest prime number?",
    options: ["0", "1", "2", "3"],
    answer: "2",
  },
  {
    question: "Who painted the Mona Lisa?",
    options: ["Vincent Van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
    answer: "Leonardo da Vinci",
  },
  {
    question: "What is the speed of light?",
    options: ["3x10⁸ m/s", "2x10⁸ m/s", "5x10⁸ m/s", "1x10⁸ m/s"],
    answer: "3x10⁸ m/s",
  },
  {
    question: "What does HTTP stand for?",
    options: ["Hypertext Transfer Protocol", "High Transfer Text Protocol", "Hypertext Transmission Protocol", "High Text Transfer Protocol"],
    answer: "Hypertext Transfer Protocol",
  },
  {
    question: "What is the chemical symbol for Gold?",
    options: ["Au", "Ag", "Go", "Gd"],
    answer: "Au",
  },
];

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerClick = (option) => {
    if (option === quizData[currentQuestion].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizData.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <div className="app">
      {showScore ? (
        <div className="score-section">
          <h1>Your Score: {score}/{quizData.length}</h1>
          <button onClick={restartQuiz} className="restart-button">Restart Quiz</button>
        </div>
      ) : (
        <div className="question-section">
          <h1 className="quiz-title">Quiz App</h1>
          <div className="question-count">
            <span>Question {currentQuestion + 1}</span>/{quizData.length}
          </div>
          <div className="question-text">{quizData[currentQuestion].question}</div>
          <div className="answer-section">
            {quizData[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerClick(option)}
                className="answer-button"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
