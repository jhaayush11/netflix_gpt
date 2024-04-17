
const MovieCard = ({ movie_data }) => {
  return (
    <img
      className="rounded-lg shadow-black shadow-lg p-4 w-60 border-2 border-gray-700"
      src={"https://image.tmdb.org/t/p/original/" + movie_data?.poster_path}
      alt="Error" />
  )
};

export default MovieCard;
