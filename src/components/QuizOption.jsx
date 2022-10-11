import { toast } from "react-toastify";

const QuizOption = ({ option, quiz }) => {
  const { question, correctAnswer } = quiz;

  const handleAnsCheck = (value) => {
    if (value === correctAnswer) {
      toast.success("Correct Answer");
    } else {
      toast.error("Wrong Answer");
    }
  };

  return (
    <>
      <label className="flex cursor-pointer items-center gap-2 rounded-lg border p-3 hover:bg-primary">
        <input
          onClick={(e) => handleAnsCheck(e.target.value)}
          type="radio"
          id={option}
          name={question}
          value={option}
        />
        {option}
      </label>
    </>
  );
};

export default QuizOption;
