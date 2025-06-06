import { Link } from "@tanstack/react-router";

function Navigation() {
  return (
    <>
      <div className="navbar text-white shadow-md px-4 sticky top-0 z-50 bg-[#e7625f]">
        {/* Left: Logo/Brand */}
        <div className="flex-1">
          <Link
            to="/"
            className="btn btn-ghost text-xl text-white hover:bg-[#c85250]"
          >
            PokéDex
          </Link>
        </div>

        {/* Right: Hamburger for mobile */}
        <div className="flex-none lg:hidden">
          <div className="dropdown dropdown-end">
            <label
              tabIndex={0}
              className="btn btn-ghost text-white hover:bg-[#c85250]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#c85250] text-white rounded-box w-52"
            >
              <li>
                <Link to="/favorites">Favorites</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <a href="https://github.com/EliasEgel/react-mvp">Github</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Right: Menu for desktop */}
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li className="hover:bg-[#c85250] rounded-lg">
              <Link to="/favorites">Favorites</Link>
            </li>
            <li className="hover:bg-[#c85250] rounded-lg">
              <Link to="/about">About</Link>
            </li>

            <li className="hover:bg-[#c85250] rounded-lg">
              <a href="https://github.com/EliasEgel/react-mvp">Github</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navigation;
