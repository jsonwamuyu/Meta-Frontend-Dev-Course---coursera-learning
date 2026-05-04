import TrackExpenses from "./hooks/useReducer/TrackExpenses";
import EnableSubmitButton from "./hooks/useState/EnableSubmitButton";
import UsePrevious from "./hooks/customHooks/UsePrevious";
import UseRefHook from "./hooks/useRef/UseRefHook";
import ContextAndReducer from "./hooks/tasks/ContextAndReducer";

const LittleLemon = () => {
  return (
    <section className="container gap-16 flex flex-col my-8">
      <ContextAndReducer />
      <UsePrevious />
      <UseRefHook />
      <TrackExpenses />
      <EnableSubmitButton />
    </section>
  );
};

export default LittleLemon;
