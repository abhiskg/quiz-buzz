const Quiz = ({ quiz }) => {
  const { id, name, logo, total } = quiz;
  return (
    <div className="border p-3 rounded-lg">
      <div className="bg-slate-500 rounded-xl ">
        <img src={logo} alt="" className="mx-auto w-full" />
      </div>
      <p className="mt-2 font-semibold text-lg">Topic: {name}</p>
      <p>Total: {total}</p>
      <button>Start Quiz</button>
    </div>
  );
};

export default Quiz;
