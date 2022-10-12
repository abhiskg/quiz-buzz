import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [menu, setMenu] = useState(false);
  return (
    <header className=" sticky top-0 z-10 h-16 bg-primary">
      <nav className="custom-width mx-auto flex h-full items-center justify-between">
        <Link className="text-xl font-semibold" to="/">
          Quiz Buzz
        </Link>
        <ul className="hidden gap-5 font-medium sm:flex ">
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
              to="/topics"
              className={({ isActive }) => (isActive ? " underline" : "")}
            >
              Topics
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

        {/* Hamburger Menu */}
        <div
          onClick={() => setMenu(!menu)}
          className="z-50 flex h-5 w-6 cursor-pointer flex-col items-end justify-between sm:hidden "
        >
          <span
            className={`h-[0.1rem] rounded-lg bg-black transition-transform  duration-100 ease-in-out ${
              menu ? "w-6 translate-y-1 rotate-45" : "w-full"
            }`}
          />
          <span
            className={`h-[0.1rem] rounded-lg bg-black  ${
              menu ? "hidden" : "w-full"
            }`}
          />
          <span
            className={`h-[0.1rem] rounded-lg bg-black transition-transform duration-100 ease-in-out ${
              menu ? "w-6 -translate-y-3.5 -rotate-45" : "w-full"
            }`}
          />
        </div>
      </nav>

      <nav
        className={`${
          menu ? "translate-x-48" : "translate-x-full"
        } no-scrollbar fixed top-0 right-0 bottom-0 z-40 w-full overflow-y-auto bg-secondary-200 transition-transform duration-200 ease-in-out md:hidden `}
      >
        <ul className="ml-10 mt-32 mb-10 flex flex-col gap-7 ">
          <li onClick={() => setMenu(false)}>
            <Link className="text-black" to="/home">
              Home
            </Link>
          </li>
          <li onClick={() => setMenu(false)}>
            <Link className="text-black" to="/topics">
              Topics
            </Link>
          </li>
          <li onClick={() => setMenu(false)}>
            <Link to="/statistics" className="text-black">
              Statistics
            </Link>
          </li>
          <li onClick={() => setMenu(false)}>
            <Link to="/blog" className="text-black">
              Blog
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
