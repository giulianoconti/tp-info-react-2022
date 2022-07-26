import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { NavbarSearch } from "./NavbarSearch";

export const Navbar = ({ darkMode, setDarkMode }) => {
  const [closedMenu, setClosedMenu] = useState(true);

  const handleMenuButtonClick = () => {
    setClosedMenu(!closedMenu);
  };

  const handleDarkMode = () => {
    localStorage.setItem("darkMode", !darkMode);
    setDarkMode(!darkMode);
  };

  return (
    <div className="h-16">
      <nav className="fixed z-50 h-16 w-full bg-gray-200 items-center py-3 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center">
          <Link className="flex items-center ml-4 md:w-60" to="/">
            <img src="/images/logo.png" className="mr-3 h-6 sm:h-9" alt="Logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap text-blue-500">Giuliano Noticias</span>
          </Link>

          <div className="flex md:w-56">
            <NavbarSearch classForPc="hidden relative md:block w-full" />
            <button
              data-collapse-toggle="mobile-menu-3"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg mr-2 md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-3"
              aria-expanded="false"
              onClick={handleMenuButtonClick}
            >
              <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>

          <div
            className={`justify-between items-center bg-slate-200 mt-3 w-full md:bg-transparent md:mr-4 md:mt-0 md:flex md:w-60 md:order-1 dark:bg-gray-900 ${
              closedMenu && "hidden"
            }`}
          >
            <NavbarSearch classForPhone="relative mt-3 md:hidden" />
            <ul className="flex flex-col mt-4 md:flex-row md:space-x-2 md:mt-0 md:text-sm md:font-medium md:items-center">
              <li>
                <NavLink
                  to="/"
                  className="block py-2 pr-4 pl-3 text-gray-400 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 hover:text-blue-500 md:p-0 md:dark:hover:bg-transparent dark:border-gray-700 dark:hover:bg-gray-700"
                >
                  Últimas Noticias
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/search/tecnologia/publishedAt/1"
                  className="block py-2 pr-4 pl-3 text-gray-400 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 hover:text-blue-500 md:p-0 md:dark:hover:bg-transparent dark:border-gray-700 dark:hover:bg-gray-700"
                >
                  Tecnología
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/search/politica/publishedAt/1"
                  className="block py-2 pr-4 pl-3 text-gray-400 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 hover:text-blue-500 md:p-0 md:dark:hover:bg-transparent dark:border-gray-700 dark:hover:bg-gray-700"
                >
                  Política
                </NavLink>
              </li>
            </ul>

            <div
              className="flex text-gray-500 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer py-2 px-3 my-4 hover:text-black md:my-0 md:px-0  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:hover:text-white md:bg-transparent dark:md:bg-transparent md:border-none"
              onClick={handleDarkMode}
            >
              <p className="md:hidden">Dark Mode:</p>
              <button className="flex justify-between w-12 h-6 cursor-pointer items-center bg-orange-400 rounded-full transition-colors ml-2 dark:bg-gray-500">
                <svg className="ml-[3px] fill-black" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z" />
                </svg>
                <svg className="mr-[3px] fill-yellow-100" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
                </svg>
                <div className="absolute z-10 w-5 h-5 bg-white rounded-full shadow transition-transform dark:translate-x-7"></div>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
