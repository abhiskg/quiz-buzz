import { Link } from "react-router-dom";
import { ArrowSmallRightIcon } from "@heroicons/react/24/solid";

const Quiz = ({ quiz }) => {
  const { id, name, logo, total } = quiz;
  return (
    <div className="rounded-lg border p-3">
      <div className="rounded-xl bg-slate-500 ">
        <img src={logo} alt="" className="mx-auto w-full" />
      </div>
      <p className="mt-2 text-lg font-semibold">Topic: {name}</p>
      <p>Total Quiz: {total}</p>
      <div className="flex items-center">
        <Link to={`/quiz/${id}`}>Start Practice</Link>
        <ArrowSmallRightIcon className="h-5 w-5" />
      </div>
    </div>
  );
};

export default Quiz;
