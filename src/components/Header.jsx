import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className=" sticky top-0 z-10 h-14 bg-cyan-500">
      <nav className="custom-width  mx-auto flex h-full items-center justify-between">
        <Link to="/">Quiz Buzz</Link>
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
