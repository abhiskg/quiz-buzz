import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className=" sticky top-0 z-10 h-16 bg-cyan-500">
      <nav className="custom-width  mx-auto flex h-full items-center justify-between">
        <Link className="text-xl font-semibold" to="/">
          Quiz Buzz
        </Link>
        <ul className="flex gap-5 font-medium ">
          <li>
            <NavLink
              to="/home"
              className={({ isActive }) =>
                isActive ? "text-blue-500" : "text-black"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/statistics"
              className={({ isActive }) =>
                isActive ? "text-blue-500" : "text-black"
              }
            >
              Statistics
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                isActive ? "text-blue-500" : "text-black"
              }
            >
              Blog
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
