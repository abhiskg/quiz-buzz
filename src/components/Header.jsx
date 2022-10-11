import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className=" sticky top-0 z-10 h-16 bg-primary">
      <nav className="custom-width mx-auto flex h-full items-center justify-between">
        <Link className="text-xl font-semibold" to="/">
          Quiz Buzz
        </Link>
        <ul className="flex gap-5 font-medium  ">
          <li className="hover:underline">
            <NavLink
              to="/home"
              className={({ isActive }) => (isActive ? " underline" : "")}
            >
              Home
            </NavLink>
          </li>
          <li className="hover:underline">
            <NavLink
              to="/statistics"
              className={({ isActive }) => (isActive ? " underline" : "")}
            >
              Statistics
            </NavLink>
          </li>
          <li className="hover:underline">
            <NavLink
              to="/blog"
              className={({ isActive }) => (isActive ? " underline" : "")}
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
