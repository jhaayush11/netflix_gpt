import { useSelector } from "react-redux"
import MovieList from "./MovieList"

const SecondaryContainer = () => {
  const nowPlayingMovies = useSelector(store => store?.movies?.nowPlayingMovies);
  const popularMovies = useSelector(store => store?.movies?.popularMovies);
  const topRatedMovies = useSelector(store => store?.movies?.topRatedMovies);
  const upcomingMovies = useSelector(store => store?.movies?.upcomingMovies);
  return (
    <div className="bg-black">
      <div className="-mt-52 relative z-20 pl-2">
        <MovieList title={"Top Rated Movies"} movies={topRatedMovies} />
        <MovieList title={"Popular Movies"} movies={popularMovies} />
        <MovieList title={"Now Playing Movies"} movies={nowPlayingMovies} />
        <MovieList title={"Upcoming Movies"} movies={upcomingMovies} />
      </div>
    </div>
  );
}

export default SecondaryContainer
