import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import QuizOption from "./QuizOption";

const QuizForm = ({ quiz }) => {
  const [view, setView] = useState(false);
  const { question, options, correctAnswer } = quiz;

  return (
    <div className="shadow-md w-2/3 mx-auto p-5 relative ">
      <div className="text-center">Quiz: {question}</div>
      <div className="grid grid-cols-2 gap-3 mt-5 ">
        {options.map((option) => (
          <QuizOption key={option} option={option} quiz={quiz} />
        ))}
      </div>
      <div
        onClick={() => setView(!view)}
        className="absolute right-2 top-2 cursor-pointer"
      >
        {view ? (
          <EyeIcon className="h-6 w-6  " />
        ) : (
          <EyeSlashIcon className="h-6 w-6" />
        )}
      </div>
      {view && (
        <div className="text-center text-green-500 mt-5">
          Ans: {correctAnswer}
        </div>
      )}
    </div>
  );
};

export default QuizForm;
