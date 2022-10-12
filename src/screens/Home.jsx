import { useLoaderData } from "react-router-dom";
import Quiz from "../components/quiz/Quiz";
import React, { Suspense } from "react";
const HeaderAnimation = React.lazy(() =>
  import("../components/animation/HeaderAnimation")
);
// import { useLottie } from "lottie-react";

const Home = () => {
  const { data } = useLoaderData();
  // const options = {
  //   animationData: main,
  //   loop: true,
  // };
  // const { View } = useLottie(options);
  return (
    <div>
      <div className="bg-primary">
        <div className="custom-width mx-auto flex flex-col items-center justify-between md:flex-row">
          <div>
            <h1 className="mt-10 text-center text-4xl font-bold md:mt-0 md:text-justify">
              Quiz Buzz
            </h1>
            <p className="text-center text-lg font-medium md:text-justify">
              A fun and effective way to test your skills.{" "}
            </p>
          </div>
          <Suspense fallback={<div>Loading..</div>}>
            <HeaderAnimation />
          </Suspense>
        </div>
      </div>
      <div className=" custom-width mx-auto my-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((quiz) => (
          <Quiz key={quiz.id} quiz={quiz} />
        ))}
      </div>
    </div>
  );
};

export default Home;
