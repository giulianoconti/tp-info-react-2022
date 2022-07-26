import { useContext, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../SearchContext";

export const NavbarSearch = ({ classForPc, classForPhone }) => {
  const inputRef = useRef();
  const navigate = useNavigate();
  const { searchInput } = useContext(SearchContext);

  useEffect(() => {
    inputRef.current.value = searchInput;
  }, [searchInput]);

  const searchResult = (e) => {
    e.preventDefault();
    scrollTo(0, 0);
    navigate(`/search/${inputRef.current.value}/publishedAt/1`);
  };

  return (
    <form className={classForPc + " " + classForPhone} onSubmit={searchResult}>
      <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
        <svg className="w-5 h-5 text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            clipRule="evenodd"
          ></path>
        </svg>
      </div>
      <input
        ref={inputRef}
        className="block outline-none p-2 pl-10 w-full text-gray-900 bg-gray-50 rounded-lg border-2 border-gray-300 sm:text-sm focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
        placeholder="Buscar..."
      />
    </form>
  );
};
