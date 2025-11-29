import { useState, useEffect } from 'react';
import Description from './components/Description.jsx';
import Feedback from './components/Feedback.jsx';
import Options from './components/Options.jsx';
import './App.css';


const App = () => {
  const [feedback, setFeedback] = useState(() => {
    const value = localStorage.getItem('countValue');
    return value ? JSON.parse(value) : { good: 0, neutral: 0, bad: 0 };
  });

  useEffect(() => {
    localStorage.setItem('countValue', JSON.stringify(feedback));
  }, [feedback]);

 
const updateFeedback = (feedbackType) => {
  setFeedback(prev => ({
    ...prev,
    [feedbackType]: prev[feedbackType] + 1,
  }));
};


  const resetFeedBacks = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  
const positiveFeedback = totalFeedback > 0
  ? Math.round((feedback.good / totalFeedback) * 100)
  : 0;


  return (
    <div>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        feedback={feedback}
        resetFeedBacks={resetFeedBacks}
      />
      {totalFeedback > 0 ? (
        <Feedback
          feedback={feedback}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <div>
          <p>No feedback given yet.</p>
        </div>    
      )}
    </div>
  );
};

export default App;
