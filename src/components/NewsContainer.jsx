export const NewsContainer = ({ data }) => {
  return (
    <div className="flex flex-wrap justify-center mx-auto">
      {data?.articles?.map((item, index) => (
        <a className="flex flex-col lg:w-[380px] my-5 lg:mx-5 transition-transform lg:hover:scale-105" href={item.url} key={index}>
          <img className="lg:h-48 w-full lg:rounded-t-lg" src={item.urlToImage ? item.urlToImage : "/images/default_image.png"} alt={"image-" + index}></img>
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
  );
};
