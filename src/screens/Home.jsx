import { useLoaderData } from "react-router-dom";
import { useLottie } from "lottie-react";
import Quiz from "../components/Quiz";
import main from "../assets/main.json";

const Home = () => {
  const { data } = useLoaderData();
  const options = {
    animationData: main,
    loop: true,
  };
  const { View } = useLottie(options);
  return (
    <div className="custom-width mx-auto">
      <div className="flex items-center justify-between ">
        <div>
          <h1 className="text-4xl font-bold">Quiz Buzz</h1>
          <p className="text-lg font-medium">
            A fun and effective way to test your skills.{" "}
          </p>
        </div>
        <div>{View}</div>
      </div>
      <div className=" mt-5 grid grid-cols-2 gap-5 md:grid-cols-3">
        {data.map((quiz) => (
          <Quiz key={quiz.id} quiz={quiz} />
        ))}
      </div>
    </div>
  );
};

export default Home;
