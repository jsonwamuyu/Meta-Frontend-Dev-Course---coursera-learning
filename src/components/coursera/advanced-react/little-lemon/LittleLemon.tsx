import React from "react";
import TrackExpenses from "./hooks/useReducer/TrackExpenses";
import EnableSubmitButton from "./hooks/usestate/EnableSubmitButton";

const LittleLemon = () => {
  return (
    <section className="container gap-16 flex flex-col">
      <div>
        <h2>Little Lemon</h2>
      </div>
      <TrackExpenses />
      <EnableSubmitButton />
    </section>
  );
};

export default LittleLemon;
