import restaurant from "../assets/restaurant.jpg";
import MyVideo from "./MyVideo";
import Gallery from "./coursera/advanced-react/renderHOC/Galary";
import Profile from "./coursera/advanced-react/renderHOC/Profile";
const About = () => {
  return (
    <section className="container">
      <Gallery />
      <Profile />
      <div>
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
        <p className="max-w-sm text-sm">
          Little Lemon Restaurant is an ancient dish oriented restaurant located
          in Singapore.
        </p>
      </div>
      <div>
        <h3>React Player example</h3>
        <p>Use React Player library to work efficiently with videos.</p>
        <img src={restaurant} alt="Little Lemon" className="h-48" />
      </div>
      <MyVideo />
    </section>
  );
};

export default About;
