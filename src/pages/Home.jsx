import { useContext, useEffect } from "react";
import { SearchContext } from "../SearchContext";
import { useFetch } from "../hooks/useFetch";
import { NewsContainer } from "../components/NewsContainer";
import { Loading } from "../components/Loading";
import { Error } from "./Error";

export const Home = () => {
  const { data, loading, error } = useFetch(
    `https://newsapi.org/v2/everything?q=Apple&sortBy=publishedAt&apiKey=ff43749ae9984e3299690af7b8dd5533&pageSize=48&language=es`
  );
  const { setSearchInput } = useContext(SearchContext);

  useEffect(() => {
    scrollTo(0, 0);
    setSearchInput("");
  }, []);

  if (error) return <Error message={error?.message} />;

  if (loading) return <Loading />;

  return (
    <div className="bg-white text-black dark:bg-gray-800 dark:text-gray-200">
      <h1 className="text-center text-2xl pt-4">Últimas Noticias</h1>
      <NewsContainer data={data} />
    </div>
  );
};
