import React, { useState } from "react";

const FeedbackForm = () => {
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState("");

  const handleFeedback = (e) => {
    e.preventDefault();
    console.log("form submitted successfully.");
    setFeedback("");
    setScore(0);
  };
  return (
    <div>
      <form action="" className="w-full" onSubmit={handleFeedback}>
        <div className="pb-4">
          <h4 className="text-4xl mb-2">Feedback</h4>
          <p>We value your feedbacks. This will help us serve you better.</p>
        </div>
        <fieldset className="form-items">
          <div className="form-group">
            <label htmlFor="score">Score Us</label>
            <input
              type="range"
              name=""
              id="score"
              min="0"
              max="10"
              value={score}
              onChange={(e) => setScore(e.target.value)}
            />
            <p className="text-sm">{score}</p>
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <input
              type="text"
              placeholder="Write your feedback"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
            />
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default FeedbackForm;
