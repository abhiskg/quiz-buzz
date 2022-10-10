const QuizOption = ({ option, quiz }) => {
  const { question, correctAnswer } = quiz;

  const handleAnsCheck = (value) => {
    if (value === correctAnswer) {
      alert("Correct ans");
    }
  };

  return (
    <div className="border rounded-lg flex items-center gap-2 p-3">
      <input
        onClick={(e) => handleAnsCheck(e.target.value)}
        type="radio"
        id={question}
        name={question}
        value={option}
      />
      <label htmlFor={question}>{option}</label>
    </div>
  );
};

export default QuizOption;
