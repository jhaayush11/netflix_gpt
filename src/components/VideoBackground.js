import useTrailerHook from "../hooks/useTrailerHook";
import { useSelector } from "react-redux";

const VideoBackground = ({ movie_id }) => {
  useTrailerHook(movie_id);
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  return (
    <div className="relative">
      <iframe
        className="w-screen aspect-video"
        src={"https://www.youtube.com/embed/" + trailerVideo?.key+"?autoplay=1&cc_load_policy=1&mute=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
}

export default VideoBackground;
