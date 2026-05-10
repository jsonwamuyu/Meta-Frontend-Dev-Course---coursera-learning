import TrackExpenses from "./hooks/useReducer/TrackExpenses";
import EnableSubmitButton from "./hooks/useState/EnableSubmitButton";
import UsePrevious from "./hooks/customHooks/UsePrevious";
import UseRefHook from "./hooks/useRef/UseRefHook";
import ContextAndReducer from "./hooks/tasks/ContextAndReducer";
import SpreadAttributes from "../children-prop/SpreadAttributes";
import HigherOderComponent from "../higher-order-components/HigherOderComponent";

const LittleLemon = () => {
  return (
    <section className="container gap-16 flex flex-col my-8">
      <SpreadAttributes />
      <HigherOderComponent />
      <ContextAndReducer />
      <UsePrevious />
      <UseRefHook />
      <TrackExpenses />
      <EnableSubmitButton />
    </section>
  );
};

export default LittleLemon;
