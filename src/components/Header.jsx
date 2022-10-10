import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className=" h-14 bg-cyan-500">
      <nav className="flex justify-between custom-width mx-auto h-full items-center">
        <div>Quiz Buzz</div>
        <ul className="flex gap-4">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/statistics">Statistics</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
