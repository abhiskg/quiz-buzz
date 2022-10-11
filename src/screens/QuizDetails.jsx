import { useLoaderData } from "react-router-dom";
import QuizForm from "../components/QuizForm";

const QuizDetails = () => {
  const { data } = useLoaderData();
  const { name, questions } = data;
  console.log(data);
  return (
    <div>
      <h1 className="mt-5 text-center text-xl font-semibold">Quiz of {name}</h1>
      <div className="">
        {questions.map((question, index) => (
          <QuizForm key={question.id} quiz={question} index={index} />
        ))}
      </div>
    </div>
  );
};

export default QuizDetails;
