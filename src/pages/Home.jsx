import { Loading } from "../components/Loading";
import { useFetch } from "../hooks/useFetch";
import { Error } from "./Error";

export const Home = () => {
  const { data, loading, error } = useFetch(
    `https://newsapi.org/v2/everything?q=Apple&sortBy=publishedAt&apiKey=ff43749ae9984e3299690af7b8dd5533&pageSize=30&language=es`
  );

  if (error) return <Error message={error?.message} />;

  if (loading) return <Loading />;

  return (
    <div className="bg-white text-black dark:bg-gray-800 dark:text-gray-200">
      <h1 className="text-center text-2xl pt-4">Últimas Noticias</h1>
      <div className="flex flex-wrap justify-center container mx-auto">
        {data?.articles?.map((item, index) => (
          <a
            className="flex flex-col lg:w-[380px] my-5 lg:mx-5 transition-transform lg:hover:scale-105"
            href={item.url}
            key={index}
          >
            <img className="lg:h-48 w-full lg:rounded-t-lg" src={item.urlToImage} alt={"image-" + index}></img>
            <div className="flex flex-col p-2 lg:w-[380px] lg:h-[350px] lg:rounded-b-lg bg-gray-200 dark:bg-gray-900">
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
    </div>
  );
};
