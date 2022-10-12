import { useLottie } from "lottie-react";
import main from "../../assets/main.json";

const HeaderAnimation = () => {
  const options = {
    animationData: main,
    loop: true,
  };
  const { View } = useLottie(options);

  return <div>{View}</div>;
};

export default HeaderAnimation;
