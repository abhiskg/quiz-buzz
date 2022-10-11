import { useLottie } from "lottie-react";
import { useRouteError } from "react-router-dom";
import error from "../assets/error.json";

const ErrorPage = () => {
  const options = {
    animationData: error,
    loop: true,
  };
  const { View } = useLottie(options);
  const routeError = useRouteError();
  console.log(routeError);
  return (
    <div className="grid place-items-center">
      {View}
      <div className="text-red-500">
        {routeError.statusText || routeError.message}
      </div>
    </div>
  );
};

export default ErrorPage;
