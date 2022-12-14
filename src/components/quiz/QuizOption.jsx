import { toast } from "react-toastify";

const QuizOption = ({ option, quiz, setCorrectAns, setWrongAns }) => {
  const { question, correctAnswer } = quiz;

  const handleAnsCheck = (value) => {
    if (value === correctAnswer) {
      setCorrectAns((prev) => prev + 1);
      toast.success("Correct Answer", {
        theme: "colored",
        autoClose: 2000,
      });
    } else {
      setWrongAns((prev) => prev + 1);
      toast.error("Wrong Answer", {
        theme: "colored",
        autoClose: 2000,
      });
    }
  };

  return (
    <>
      <label className="flex cursor-pointer items-center gap-2 rounded-lg border p-3 text-sm hover:bg-primary sm:text-base">
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
