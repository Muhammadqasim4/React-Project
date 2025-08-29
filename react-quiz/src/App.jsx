import './App.css'
import { useState } from 'react';
import { QuestionAnswer } from './components/QuestionAnswer';
import { quiz } from './quiz.js';

function App() {
  // shuffle once
  const [shuffledQuiz] = useState(() => [...quiz].sort(() => Math.random() - 0.5));

  const [userAnswers, setUserAnswers] = useState({});
  const [score, setScore] = useState(null);

  const handleAnswer = (question, answer) => {
    setUserAnswers((prev) => ({ ...prev, [question]: answer }));
  };

  const allAnswered = Object.keys(userAnswers).length === shuffledQuiz.length;

  const handleSubmit = () => {
    let result = 0;
    shuffledQuiz.forEach((q) => {
      if (userAnswers[q.question] === q.answer) {
        result++;
      }
    });
    setScore(result);
  };

  return (
    <>
      <h2 className="text-center mt-2">Answer the Quiz Questions</h2>
     <div className="m-5 p-5 border rounded shadow">
  {shuffledQuiz.map((q, idx) => (
    <QuestionAnswer
      key={q.id}
      no={idx + 1}
      question={q.question}
      answers={q.options}
      onAnswer={handleAnswer}
    />
  ))}

  <div className="text-center mt-4">
    <button
      className="btn btn-lg btn-success px-5"
      onClick={handleSubmit}
      disabled={!allAnswered || score !== null}
    >
      Submit
    </button>
  </div>

  {score !== null && (
    <h3 className="text-center text-primary mt-4">
      🎉 You scored <span className="fw-bold">{score}</span> / {shuffledQuiz.length}
    </h3>
  )}
</div>

    </>
  );
}

export default App;
