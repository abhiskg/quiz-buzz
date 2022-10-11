import { Link } from "react-router-dom";
import { ArrowSmallRightIcon } from "@heroicons/react/24/solid";

const Quiz = ({ quiz }) => {
  const { id, name, logo, total } = quiz;
  return (
    <div className="rounded-lg border p-3 shadow">
      <div className="rounded-xl bg-secondary-100">
        <img src={logo} alt="" className="mx-auto w-full" />
      </div>
      <p className="mt-2 text-lg font-semibold">Topic: {name}</p>
      <p className="mt-1 text-gray-600">Total Quiz: {total}</p>
      <button className=" mt-2 flex items-center justify-start rounded bg-secondary-100 px-2 py-2 font-medium hover:bg-primary">
        <Link to={`/quiz/${id}`}>Start Practice</Link>
        <ArrowSmallRightIcon className="h-5 w-5" />
      </button>
    </div>
  );
};

export default Quiz;
