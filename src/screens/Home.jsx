import { useLoaderData } from "react-router-dom";
import Quiz from "../components/Quiz";

const Home = () => {
  const { data } = useLoaderData();

  return (
    <div className="">
      <div className="custom-width mx-auto grid md:grid-cols-3 grid-cols-2 gap-5 mt-5">
        {data.map((quiz) => (
          <Quiz key={quiz.id} quiz={quiz} />
        ))}
      </div>
    </div>
  );
};

export default Home;
