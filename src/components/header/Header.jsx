

export const Header = () => {
  return (
    <div className="navbar bg-base-100 w-full px-3 sm:px-5 lg:px-0 max-w-[1170px] mx-auto lg:w-11/12">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li className="text-lg text-[#7E90FE] font-semibold">Statistics</li>
            <li className="text-lg text-[#757575] font-semibold">
              Applied Jobs
            </li>
            <li className="text-lg text-[#757575] font-semibold">Blog</li>
          </ul>
        </div>

        <a className="text-xl sm:text-3xl text-[#1A1919] font-bold">CareerHub</a>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="flex gap-x-20 px-1">
          <li className="text-lg text-[#7E90FE] font-semibold">Statistics</li>
          <li className="text-lg text-[#757575] font-semibold">Applied Jobs</li>
          <li className="text-lg text-[#757575] font-semibold">Blog</li>
        </ul>
      </div>

      <div className="navbar-end">
        <button className="p-3 sm:py-4 sm:px-6 bg-gradient-to-r from-[#7E90FE] to-[#9873FF] rounded-lg text-sm sm:text-xl text-[#fff] font-extrabold">
          Star Applying
        </button>
      </div>
    </div>
  );
}
