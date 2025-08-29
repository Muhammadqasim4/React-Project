export const QuestionAnswer = ({ no, question, answers, onAnswer }) => {
  return (
    <div className="quiz-card my-4 p-4 shadow-sm rounded">
      <p className="fw-bold mb-3">{no}. {question}</p>
      <div className="d-flex flex-column gap-2">
        {answers.map((ans, index) => (
          <div key={index} className="form-check option-box">
            <input
              type="radio"
              id={question + index}
              name={question}
              value={ans}
              onChange={() => onAnswer(question, ans)}
              className="form-check-input"
            />
            <label htmlFor={question + index} className="form-check-label">
              {ans}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};
