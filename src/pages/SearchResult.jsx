import { useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { SearchContext } from "../SearchContext";
import { Loading } from "../components/Loading";
import { NewsContainer } from "../components/NewsContainer";
import { ButtonNavigatePages } from "../components/ButtonNavigatePages";
import { Error } from "./Error";

export const SearchResult = () => {
  const navigate = useNavigate();
  const { resultId, sortById, pageId } = useParams();
  const pageIdNumber = parseInt(pageId);
  const { setSearchInput } = useContext(SearchContext);

  useEffect(() => {
    scrollTo(0, 0);
    setSearchInput(resultId);
  }, [resultId]);

  const { data, loading, error } = useFetch(
    `https://newsapi.org/v2/everything?q=${resultId}&apiKey=ff43749ae9984e3299690af7b8dd5533&sortBy=${sortById}&page=${pageIdNumber}&pageSize=10&language=es`
  );

  const totalPages = Math.ceil(data?.totalResults / 12);

  const nextPage = () => {
    if (pageIdNumber < totalPages) {
      scrollTo(0, 0);
      navigate(`/search/${resultId}/${sortById}/${pageIdNumber + 1}`);
    }
  };

  const prevPage = () => {
    if (pageIdNumber > 1) {
      scrollTo(0, 0);
      navigate(`/search/${resultId}/${sortById}/${pageIdNumber - 1}`);
    }
  };

  const goToThisPage = (e) => {
    scrollTo(0, 0);
    navigate(`/search/${resultId}/${sortById}/${e.target.id}`);
  };

  const handleSortBy = (option) => {
    navigate(`/search/${resultId}/${option}/1`);
  };

  if (error) return <Error message={error?.message} />;

  if (pageIdNumber < 1 || pageIdNumber > totalPages || isNaN(pageIdNumber)) return <Error message="Página no encontrada" />;

  if (loading) return <Loading />;

  return (
    <div className="bg-white text-black dark:bg-gray-800 dark:text-gray-200">
      <div className="flex justify-between lg:mx-24 pt-4">
        <h1 className="flex justify-center items-center text-sm">Resultados encontrados: {data?.totalResults}</h1>
        <div>
          <div className="flex justify-center items-center text-sm">
            <label htmlFor="countries">
              <h1 className="mr-2">Ordenar por</h1>
            </label>
            <select
              id="countries"
              className="block w-1/2 p-1 outline-none bg-gray-50 border border-gray-300 text-sm rounded-lg focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:border-blue-500"
              onChange={(e) => handleSortBy(e.target.value)}
              defaultValue={sortById}
            >
              <option value="publishedAt">Fecha</option>
              <option value="relevancy">Relevancia</option>
              <option value="popularity">Popularidad</option>
            </select>
          </div>
        </div>
      </div>

      <NewsContainer data={data} />

      <div className="flex justify-center">
        <div className="flex items-center my-4">
          {pageIdNumber > 1 && (
            <>
              <ButtonNavigatePages arrow="prev" onClick={prevPage} />
              {pageIdNumber > 2 && <ButtonNavigatePages number={pageIdNumber - 2} onClick={goToThisPage} />}
              <ButtonNavigatePages number={pageIdNumber - 1} onClick={goToThisPage} />
            </>
          )}
          <ButtonNavigatePages currentPage={true} number={pageIdNumber} onClick={goToThisPage} />
          {pageIdNumber < totalPages && (
            <>
              <ButtonNavigatePages number={pageIdNumber + 1} onClick={goToThisPage} />
              {pageIdNumber < totalPages - 1 && <ButtonNavigatePages number={pageIdNumber + 2} onClick={goToThisPage} />}
              <ButtonNavigatePages arrow="next" onClick={nextPage} />
            </>
          )}
        </div>
      </div>
    </div>
  );
};
