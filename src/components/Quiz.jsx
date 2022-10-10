import { Link } from "react-router-dom";

const Quiz = ({ quiz }) => {
  const { id, name, logo, total } = quiz;
  return (
    <div className="border p-3 rounded-lg">
      <div className="bg-slate-500 rounded-xl ">
        <img src={logo} alt="" className="mx-auto w-full" />
      </div>
      <p className="mt-2 font-semibold text-lg">Topic: {name}</p>
      <p>Total: {total}</p>
      <Link to={`/quiz/${id}`}>Start Quiz</Link>
    </div>
  );
};

export default Quiz;
