
const VideoTitle = ({title,overview}) => {
  return (
    <div className=" w-screen aspect-video absolute z-10 text-white pt-[20%] pl-12 bg-gradient-to-r from-black ">
      <h1 className="font-bold text-5xl ">{title}</h1>
      <p className="text-lg w-1/4 py-6">{overview}</p>
      <div>
        <button className="bg-white text-black border-2 font-bold text-2xl p-2 mr-3 rounded-lg w-32 hover:opacity-80">Play </button>
        <button className="bg-black  border-white border-2 font-bold text-white text-2xl p-2 rounded-lg w-32 hover:opacity-80">Info </button>
      </div>
    </div>
  );
}

export default VideoTitle
