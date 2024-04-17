import MovieCard from "./MovieCard";

const MovieList = ({title,movies}) => {
  return (
    <div className="" >
      <h1 className="text-xl text-white font-bold p-2">{title}</h1>
      <div className="flex  overflow-x-scroll h-72 scrollbar-hide">
        <div  className="flex ">{movies?.map((data) => <MovieCard movie_data={data} key={data.id}/>)}</div>
      </div>
    </div>
  )
}

export default MovieList;
