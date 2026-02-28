import LemonAudio from "../assets/audio-types.mp3";

const About = () => {
  return (
    <section className="container">
      <div>
        <h2>About Little Lemon</h2>
        <p>
          Little Lemon is a family-owned restaurant that has been serving the
          community for over 10 years. We specialize in authentic Mediterranean
          cuisine made with fresh, locally-sourced ingredients.
        </p>
      </div>
      <div>
        <audio controls muted preload="none" className="w-full max-w-md">
          <source src={LemonAudio} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>
    </section>
  );
};

export default About;
