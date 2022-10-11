import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import QuizOption from "./QuizOption";

const QuizForm = ({ quiz, index }) => {
  const [view, setView] = useState(false);
  const { question, options, correctAnswer } = quiz;

  return (
    <div className="relative mx-auto mb-5 w-2/3 p-5 shadow-md ">
      <div className="text-center">
        Quiz {index + 1}: {question}
      </div>
      <div className="mt-5 grid grid-cols-2 gap-3 ">
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
        <div className="mt-5 text-center text-green-500">
          Ans: {correctAnswer}
        </div>
      )}
    </div>
  );
};

export default QuizForm;
