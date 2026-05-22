import React from "react";

const UserFeedback = () => {
  return (
    <div className="p-1 bg-gray-200 shadow-sm text-center">
      <h6>User Feedback</h6>
    </div>
  );
};

const withWelcomeMessage = (WrappedComponent) => {
  return (props) => {
    const username = "John Doe";
    return <WrappedComponent {...props} username={username} />;
  };
};

const FeedbackForm = () => {
  const WelcomeUserFeedback = withWelcomeMessage(UserFeedback);
  return (
    <>
      <WelcomeUserFeedback />
      <form action="">
        <div className="form-group">
          <label htmlFor="feedback">Your Feedback:</label>
          <input type="text" id="feedback" className="form-control" />
        </div>
      </form>
    </>
  );
};

export default FeedbackForm;
