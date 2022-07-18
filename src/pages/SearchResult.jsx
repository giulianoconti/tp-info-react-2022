import { useNavigate, useParams } from "react-router-dom";
import { ButtonNavigatePages } from "../components/ButtonNavigatePages";
import { Loading } from "../components/Loading";
import { useFetch } from "../hooks/useFetch";
import { Error } from "./Error";

export const SearchResult = () => {
  const navigate = useNavigate();
  const { resultId, pageId } = useParams();
  const pageIdNumber = parseInt(pageId);

  const { data, loading, error } = useFetch(
    `https://newsapi.org/v2/everything?q=${resultId}&apiKey=ff43749ae9984e3299690af7b8dd5533&page=${pageIdNumber}&pageSize=12&language=es`
  );

  const totalPages = Math.ceil(data?.totalResults / 12);

  const nextPage = () => {
    if (pageIdNumber < totalPages) {
      scrollTo(0, 0);
      navigate(`/result/${resultId}/${pageIdNumber + 1}`);
    }
  };

  const prevPage = () => {
    if (pageIdNumber > 1) {
      scrollTo(0, 0);
      navigate(`/result/${resultId}/${pageIdNumber - 1}`);
    }
  };

  const goToThisPage = (e) => {
    scrollTo(0, 0);
    navigate(`/result/${resultId}/${e.target.id}`);
  };

  if (error) return <Error message={error?.message} />;

  if (pageIdNumber < 1 || pageIdNumber > totalPages || isNaN(pageIdNumber)) return <div>Page not found</div>;

  if (loading) return <Loading />;

  return (
    <div className="bg-white text-black dark:bg-gray-800 dark:text-gray-200">
      <div className="flex justify-between container mx-auto text-2xl pt-4">

      <h1 className="">Resultados encontrados: {data?.totalResults}</h1>
      <h1 className="">Resultados encontrados: {data?.totalResults}</h1>
      </div>
      <div className="flex flex-wrap justify-center container mx-auto">
        {data?.articles?.map((item, index) => (
          <a className="flex flex-col md:w-[380px] my-5 md:mx-5 transition-transform md:hover:scale-105" href={item.url} key={index}>
            <img className="md:h-48 w-full md:rounded-t-lg" src={item.urlToImage} alt={"image-" + index}></img>
            <div className="flex flex-col md:w-[380px] md:h-[350px] md:rounded-b-lg bg-gray-200 dark:bg-gray-900">
              <h2 className="mx-3 text-lg font-bold">{item.title}</h2>
              <p className="mx-3 mt-2">{item.description}</p>
              <div className="flex justify-between mx-3 mt-auto text-sm font-light">
                <p className="">Publicado el: {item.publishedAt.slice(0, 10)}</p>
                <p className="">{item.source.name}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
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
              <ButtonNavigatePages number={pageIdNumber + 2} onClick={goToThisPage} />
              <ButtonNavigatePages arrow="next" onClick={nextPage} />
            </>
          )}
        </div>
      </div>
    </div>
  );
};
