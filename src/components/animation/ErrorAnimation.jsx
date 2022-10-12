import { useLottie } from "lottie-react";
import error from "../../assets/error.json";

const ErrorAnimation = () => {
  const options = {
    animationData: error,
    loop: true,
  };
  const { View } = useLottie(options);
  return <div className="w-56">{View}</div>;
};

export default ErrorAnimation;
