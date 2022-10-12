import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import QuizForm from "../components/quiz/QuizForm";

const QuizDetails = () => {
  const [correctAns, setCorrectAns] = useState(0);
  const [wrongAns, setWrongAns] = useState(0);

  const { data } = useLoaderData();
  const { name, questions } = data;

  return (
    <div className="custom-width mx-auto">
      <h1 className="mt-5 mb-8 text-center text-2xl font-semibold">
        Quiz of {name}
      </h1>
      <div className="flex flex-col justify-center gap-10 lg:flex-row">
        <div className="flex-1">
          {questions.map((question, index) => (
            <QuizForm
              key={question.id}
              quiz={question}
              index={index}
              setCorrectAns={setCorrectAns}
              setWrongAns={setWrongAns}
            />
          ))}
        </div>
        <div className="relative mb-8 rounded-md bg-secondary-100 shadow lg:w-72">
          <div className="sticky top-16">
            <h2 className="rounded-t-md bg-primary py-2 text-center text-lg font-semibold">
              Quiz Results
            </h2>
            <div className="mx-5 mt-8 font-medium">
              Total Correct Ans: {correctAns}
            </div>
            <div className="mx-5 mt-1 mb-5 font-medium">
              Total Wrong Ans: {wrongAns}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizDetails;
