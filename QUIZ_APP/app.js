
import React, { useState } from "react";

const questions = [
  {
    question: "What is the capital of France?",
    options: ["London", "Berlin", "Paris", "Rome"],
    answer: "Paris",
  },
  {
    question: "What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    answer: "4",
  },
  {
    question: "Which language is used in React?",
    options: ["Python", "Java", "JavaScript", "C++"],
    answer: "JavaScript",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Venus", "Jupiter"],
    answer: "Mars",
  },
  {
    question: "Who painted the Mona Lisa?",
    options: ["Van Gogh", "Leonardo da Vinci", "Picasso", "Michelangelo"],
    answer: "Leonardo da Vinci",
  },
  {
    question: "What is the largest ocean on Earth?",
    options: ["Atlantic", "Indian", "Pacific", "Arctic"],
    answer: "Pacific",
  },
  {
    question: "What is the square root of 64?",
    options: ["6", "7", "8", "9"],
    answer: "8",
  },
  {
    question: "Which year did the Titanic sink?",
    options: ["1905", "1912", "1920", "1898"],
    answer: "1912",
  },
  {
    question: "Which gas do plants absorb from the atmosphere?",
    options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
    answer: "Carbon Dioxide",
  },
  {
    question: "Who developed the theory of relativity?",
    options: ["Newton", "Tesla", "Einstein", "Galileo"],
    answer: "Einstein",
  },
];

function App() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswer = (option) => {
    if (option === questions[current].answer) {
      setScore(score + 1);
    }
    const next = current + 1;
    if (next < questions.length) {
      setCurrent(next);
    } else {
      setShowScore(true);
    }
  };

  const restartQuiz = () => {
    setCurrent(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 px-4">
      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-lg text-center border-4 border-white">
        <h1 className="text-3xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-red-500">
          🎯 Quiz App
        </h1>

        {showScore ? (
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-green-600">
              🏆 You scored {score} out of {questions.length}
            </h2>
            <button
              onClick={restartQuiz}
              className="bg-gradient-to-r from-green-400 to-green-600 text-white px-6 py-2 rounded-full hover:scale-105 transition duration-300"
            >
              🔁 Restart Quiz
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            <h2 className="text-lg font-semibold text-gray-800">
              {questions[current].question}
            </h2>
            <div className="grid gap-3">
              {questions[current].options.map((option) => (
                <button
                  key={option}
                  onClick={() => handleAnswer(option)}
                  className="bg-gradient-to-r from-purple-400 to-pink-500 text-white font-medium px-4 py-2 rounded-full shadow-md hover:scale-105 transition duration-300"
                >
                  {option}
                </button>
              ))}
            </div>
            <p className="mt-2 text-sm text-gray-600">
              Question {current + 1} of {questions.length}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
