import { useState } from "react";

const EnableSubmitButton = () => {
  const [status, setStatus] = useState("typing");
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState(null);

  if (status === "success") {
    return <h3 className="text-green-400">You guessed right</h3>;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");
    try {
      await submitForm(answer);
      setStatus("success");
    } catch (err) {
      setStatus("typing");
      setError(err);
    }
  }

  return (
    <section>
      <div>
        <h3>Disable submit button</h3>
        <p>
          Will enable the disabled button once user types in the input field
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-group my-2">
          <label htmlFor="answer">Capital city of kenya</label>
          <input
            type="text"
            id="answer"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            disabled={status === "submitting"}
            placeholder="Your answer"
          />
        </div>
        <div className="mt-4">
          <button disabled={answer.length === 0 || status === "submitting"}>
            Submit
          </button>
        </div>
        {answer.length > 0 && <p className="mt-2">Your answer: {answer}</p>}
        {error !== null && <p className="text-red-300 text-sm">{error}</p>}
      </form>
    </section>
  );
};

function submitForm(answer) {
  // Pretend it's hitting the network.
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let shouldError = answer.toLowerCase() !== "nairobi";
      if (shouldError) {
        reject(new Error("Good guess but a wrong answer. Try again!"));
      } else {
        resolve();
      }
    }, 1500);
  });
}
export default EnableSubmitButton;
