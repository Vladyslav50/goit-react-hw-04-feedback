// import React, { Component } from 'react';
import { useState } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';
import css from './app.module.css';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  // onLeaveFeedback = option => {
  //   this.setState(prevState => {
  //     return { [option]: prevState[option] + 1 };
  //   });
  // };

  const countTotalFeedback = () => {
    const total = good + neutral + bad;
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    const feedBack = (good / countTotalFeedback()) * 100;
    return feedBack;
  };

  return (
    <div className={css.statistics}>
      <Section>
        <h2>Please leave feedback</h2>
      </Section>
      <FeedbackOptions
        onGood={() => setGood(prevState => prevState + 1)}
        onNeutral={() => setNeutral(prevState => prevState + 1)}
        onBad={() => setBad(prevState => prevState + 1)}
      />
      {countTotalFeedback() === 0 ? (
        <Notification message="There is no feedback" />
      ) : (
        <Section>
          <h2>Statistics</h2>
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage().toFixed()}
          />
        </Section>
      )}
    </div>
  );
}
