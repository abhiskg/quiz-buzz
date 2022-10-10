import { useLoaderData } from "react-router-dom";
import QuizForm from "../components/QuizForm";

const QuizDetails = () => {
  const { data } = useLoaderData();
  const { name, questions } = data;
  console.log(data);
  return (
    <div>
      <h1 className="text-center">Quiz of {name}</h1>
      {questions.map((question) => (
        <QuizForm key={question.id} quiz={question} />
      ))}
    </div>
  );
};

export default QuizDetails;
