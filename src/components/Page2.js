import React, { useState, useEffect } from "react";

export default function Page2() {
  const staticQuestions = [
    {
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Rome"],
      correctAnswer: "Paris",
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Jupiter", "Saturn"],
      correctAnswer: "Mars",
    },
    {
      question: "Who wrote 'To Kill a Mockingbird'?",
      options: ["Harper Lee", "J.K. Rowling", "Mark Twain", "Ernest Hemingway"],
      correctAnswer: "Harper Lee",
    },
    {
      question: "What is the largest mammal in the world?",
      options: ["Elephant", "Blue Whale", "Giraffe", "Shark"],
      correctAnswer: "Blue Whale",
    },
    {
      question: "Which element has the chemical symbol O?",
      options: ["Oxygen", "Gold", "Iron", "Hydrogen"],
      correctAnswer: "Oxygen",
    },
  ];

  const [questions] = useState(staticQuestions); 
  const [answers, setAnswers] = useState({}); 
  const [submitted, setSubmitted] = useState(false); 
  const [score, setScore] = useState(0); 

  const handleAnswer = (questionIndex, selectedAnswer) => {
    setAnswers((prev) => ({
      ...prev,
      [questionIndex]: selectedAnswer,
    }));
  };

  const handleSubmit = () => {
    let newScore = 0;
    questions.forEach((q, index) => {
      if (answers[index] === q.correctAnswer) {
        newScore++;
      }
    });
    setScore(newScore);
    setSubmitted(true);
  };

  const resetQuiz = () => {
    setAnswers({});
    setScore(0);
    setSubmitted(false);
  };
  
  const getButtonStyle = (questionIndex, option) => {
    if (!submitted) {
      return answers[questionIndex] === option
        ? { backgroundColor: "#D6DBF5" } 
        : { backgroundColor: "white" }; 
    } else {
      if (option === questions[questionIndex].correctAnswer) {
        return { backgroundColor: "lightgreen" }; 
      }
      if (answers[questionIndex] === option && option !== questions[questionIndex].correctAnswer) {
        return { backgroundColor: "lightcoral" }; 
      }
      return { backgroundColor: "white" }; 
    }
  };

  return (
    <div className="page-container">
      {questions.map((q, index) => (
        <div className="main-div" key={index} style={{ marginBottom: "20px" }}>
          <h3 className="quiz-questions">{q.question}</h3>
          <div>
            {q.options.map((option, i) => (
              <button
                className="quiz-button"
                key={i}
                onClick={() => handleAnswer(index, option)}
                style={getButtonStyle(index, option)}
                disabled={submitted}
                >
                {option}
              </button>
            ))}
          </div>
        </div>
      ))}
      {!submitted ? (
        <button className="quiz-submit" onClick={handleSubmit}>Submit Quiz</button>
      ) : (
        <div className="submit-div">
          <h2>
            You scored: {score}/{questions.length} correct answers
          </h2>
          <button className="button-play-again" onClick={resetQuiz}>Play Again</button>
        </div>
      )}
    </div>
  );
}
