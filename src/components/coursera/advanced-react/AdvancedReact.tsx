import ControlledUncontrolledComponents from "./ControlledUncontrolledComponents";
import FeedbackForm from "./FeedbackForm";
import Home from "./little-lemon/contextapi/Home";
import TransformList from "./TransformList";

const AdvancedReact = () => {
  return (
    <section className="container">
      <div>
        <h3>Advanced React</h3>
      </div>
      <div className="flex gap-8">
        <TransformList />
        <ControlledUncontrolledComponents />
        <FeedbackForm />
      </div>
      <Home />
    </section>
  );
};

export default AdvancedReact;
