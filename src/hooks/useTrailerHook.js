import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/MoviesSlice";
import { useDispatch} from "react-redux";

const useTrailerHook = (movie_id) => {
  const dispatch = useDispatch();
  const fetchTrailer = async () => {
    const data = await fetch("https://api.themoviedb.org/3/movie/" + movie_id + "/videos?language=en-US",API_OPTIONS);
    const json = await data.json();
    // console.log(json);

    const filterData = json?.results?.filter((data) => data.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    // console.log(trailer);
    dispatch(addTrailerVideo(trailer));
  };
  useEffect(() => {
    fetchTrailer();
  }, []);
};

export default useTrailerHook;