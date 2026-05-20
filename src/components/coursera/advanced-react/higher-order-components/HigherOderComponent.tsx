import { useEffect, useState } from "react";

const withMousePosition = (WrappedComponent) => {
  return (props) => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    // Since this is a side effect,we will add subscription to the event listener and clean it up when the component unmounts or when the position changes.

    useEffect(() => {
      const handleMouseMove = (event) => {
        setPosition({
          x: event.clientX,
          y: event.clientY,
        });
      };
      window.addEventListener("mousemove", handleMouseMove);
      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    }, []);

    return <WrappedComponent {...props} position={position} />;
  };
};

const PanelMouseLogger = ({ position }) => {
  if (!position) {
    return null;
  }

  return (
    <div>
      <p>Mouse position</p>
      <div className="flex flex-row gap-2">
        <span>x: {position.x}</span>
        <span>y: {position.y}</span>
      </div>
    </div>
  );
};

const PointMouseLogger = ({ position }) => {
  if (!position) {
    return null;
  }
  return (
    <div>
      <p>Mouse position</p>
      <div className="flex flex-row gap-2">
        <p>
          ( {position.x}, {position.y} )
        </p>
      </div>
    </div>
  );
};

// create two components using the higher-order component
const PanelMouseLoggerWithMousePosition = withMousePosition(PanelMouseLogger);
const PointMouseLoggerWithMousePosition = withMousePosition(PointMouseLogger);

const withUsername = (WrappedComponent) => {
  return (props) => {
    const [username, setUsername] = useState("");

    useEffect(() => {
      setUsername("Mike");
    }, []);
    return <WrappedComponent {...props} username={username} />;
  };
};

const WelcomeUser = ({ username }) => {
  if (!username) {
    return null;
  }
  return (
    <section>
      <p>
        Welcome back, <span className="uppercase">{username}</span>
      </p>
    </section>
  );
};

const WelcomeUserWithHOC = withUsername(WelcomeUser);

const HigherOderComponent = () => {
  return (
    <section className="flex gap-8 flex-col">
      <div>
        <h4>Higher-Order Component</h4>
        <p>
          A function that takes a component and returns a new component with
          additional props or behavior.
        </p>
      </div>
      <WelcomeUserWithHOC />
      <div>
        <p>Mouse point logger without the enhanced HOC functionality</p>
        <PointMouseLogger position={{ x: 2, y: 3 }} />

        <PanelMouseLoggerWithMousePosition />
        <PointMouseLoggerWithMousePosition />
      </div>
    </section>
  );
};

export default HigherOderComponent;
