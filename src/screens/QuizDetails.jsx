import { useLoaderData } from "react-router-dom";

const QuizDetails = () => {
  const { data } = useLoaderData();
  const { name } = data;
  return (
    <div>
      <h1 className="text-center">Quiz of {name}</h1>
    </div>
  );
};

export default QuizDetails;
