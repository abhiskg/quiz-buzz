import { useLoaderData } from "react-router-dom";
import Quiz from "../components/quiz/Quiz";

const Topics = () => {
  const { data } = useLoaderData();
  return (
    <div className=" custom-width mx-auto my-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {data.map((quiz) => (
        <Quiz key={quiz.id} quiz={quiz} />
      ))}
    </div>
  );
};

export default Topics;
