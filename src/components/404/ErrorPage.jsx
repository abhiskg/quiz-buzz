import { useLottie } from "lottie-react";
import React, { Suspense } from "react";
import { Link, useRouteError } from "react-router-dom";
import error from "../../assets/error.json";
const ErrorAnimation = React.lazy(() => import("../animation/ErrorAnimation"));

const ErrorPage = () => {
  // const options = {
  //   animationData: error,
  //   loop: true,
  // };
  // const { View } = useLottie(options);
  const routeError = useRouteError();
  console.log(routeError);
  return (
    <div className="mt-20 grid place-items-center">
      <Suspense fallback={<div>404</div>}>
        <ErrorAnimation />
      </Suspense>
      <div className="font-semibold text-red-500">
        {routeError.statusText || routeError.message}
      </div>
      <Link className="text-green-500 underline" to="/">
        Go Back
      </Link>
    </div>
  );
};

export default ErrorPage;
