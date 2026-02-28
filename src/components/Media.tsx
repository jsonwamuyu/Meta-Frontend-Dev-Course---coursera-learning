import designVideo from "../assets/design-types.mp4";
import designerImage from "../assets/designer.png";
import audioType from "../assets/audio-types.mp3";

const Media = () => {
  return (
    <section className="container">
      <div>
        <h3 className="text-2xl font-semibold">Working with Media</h3>
        <p className="text-sm">Working with videos and audios</p>
      </div>

      <div className="my-2 flex flex-row flex-wrap gap-8 items-start">
        <video
          className="w-full max-w-md rounded-lg"
          preload="metadata"
          poster={designerImage}
          muted
          loop
          playsInline
          controls
        >
          <source src={designVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <audio controls preload="none" className="w-full max-w-md">
          <source src={audioType} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>
    </section>
  );
};

export default Media;
