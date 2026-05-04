import ControlledUncontrolledComponents from "./ControlledUncontrolledComponents";
import FeedbackForm from "./FeedbackForm";
import Home from "./little-lemon/contextapi/Home";
import SignUpForm from "./little-lemon/formik/SignUpForm";
import GoalsTracker from "./little-lemon/goals-app/GoalsTracker";
import LittleLemonGift from "./little-lemon/hooks/useState/LittleLemonGift";
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
      <SignUpForm />
      <GoalsTracker />
      <LittleLemonGift />
    </section>
  );
};

export default AdvancedReact;
