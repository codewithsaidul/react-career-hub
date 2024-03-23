import { NavLink } from "react-router-dom";


export const Header = () => {

    const navLinks = (
      <>
        <li className="text-lg text-[#7E90FE] font-semibold">
          <NavLink to="/">Home</NavLink>
        </li>

        <li className="text-lg text-[#757575] font-semibold">
          <NavLink to="/jobs">Jobs</NavLink>
        </li>

        <li className="text-lg text-[#757575] font-semibold">
          <NavLink to="/applied">Applied Jobs</NavLink>
        </li>

        <li className="text-lg text-[#757575] font-semibold">
          <NavLink to="/statistics">Statistics</NavLink>
        </li>

        <li className="text-lg text-[#757575] font-semibold">
          <NavLink to="/blog">Blog</NavLink>
        </li>
      </>
    );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="text-2xl mr-5 lg:hidden">
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
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>

          <ul
            tabIndex={0}
            className="dropdown-content mt-3 z-[1] p-10 space-y-5 shadow bg-base-100 rounded-box w-96"
          >
            {navLinks}
          </ul>
        </div>

        <a className="text-xl sm:text-3xl text-[#1A1919] font-bold">
          CareerHub
        </a>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="flex gap-x-10 px-1">{navLinks}</ul>
      </div>

      <div className="navbar-end">
        <button className="p-3 sm:py-4 sm:px-6 bg-gradient-to-r from-[#7E90FE] to-[#9873FF] rounded-lg text-sm sm:text-xl text-[#fff] font-extrabold">
          Start Applying
        </button>
      </div>
    </div>
  );
}
