import Feedback from "./Feedback";

const Options = ({ updateFeedback, review, resetFeedBacks }) => {
  return (
    <div>
      <button onClick={() => updateFeedback('good')}>Good</button>
      <button onClick={() => updateFeedback('neutral')}>Neutral</button>
      <button onClick={() => updateFeedback('bad')}>Bad</button>
      {feedback.good + feedback.neutral + feedback.bad > 0 && (
        <button onClick={() => resetFeedBacks()}>Reset</button>
      )}
    </div>
  );
};

export default Options;