import ReactPlayer from "react-player";

const MyVideo = () => {
  return (
    <ReactPlayer
      playing
      controls
      url="https://www.youtube.com/watch?v=T8TZQ6k4SLE"
    />
  );
};

export default MyVideo;
