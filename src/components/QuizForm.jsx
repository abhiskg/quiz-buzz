import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import QuizOption from "./QuizOption";

const QuizForm = ({ quiz, index, setCorrectAns, setWrongAns }) => {
  const [view, setView] = useState(false);
  const { question, options, correctAnswer } = quiz;

  return (
    <div className="relative mx-auto mb-7 rounded-lg bg-secondary-100 p-5 shadow-md ">
      <div className="mx-6 text-center text-lg font-medium">
        Quiz {index + 1}: {question}
      </div>
      <div className="mt-5 grid grid-cols-2 gap-3  ">
        {options.map((option) => (
          <QuizOption key={option} option={option} quiz={quiz} setCorrectAns={setCorrectAns} setWrongAns={setWrongAns}  />
        ))}
      </div>
      <div
        onClick={() => setView(!view)}
        className="absolute right-4 top-3 cursor-pointer"
      >
        {view ? (
          <EyeIcon className="h-6 w-6 hover:text-secondary-200" />
        ) : (
          <EyeSlashIcon className="h-6 w-6 hover:text-secondary-200" />
        )}
      </div>
      {view && (
        <div className="mt-5 text-center font-medium  ">
          Ans: {correctAnswer}
        </div>
      )}
    </div>
  );
};

export default QuizForm;
