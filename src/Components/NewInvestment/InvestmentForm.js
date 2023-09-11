import React, { useState } from "react";
import styles from "./InvestmentForm.module.css";

const Form = (props) => {
  const [currentSavings, setCurrentSavings] = useState("");
  const [yearlySavings, setYearlySavings] = useState("");
  const [expectedInterest, setExpectedInterest] = useState("");
  const [investmentDuration, setInvestmentDuration] = useState("");
  const [resetValue, setResetValue] = useState(false);

  const currentSavingsHandler = (event) => {
    setCurrentSavings(event.target.value);
  };
  const yearlySavingsHandler = (event) => {
    setYearlySavings(event.target.value);
  };
  const expectedInterestHandler = (event) => {
    setExpectedInterest(event.target.value);
  };
  const investmentDurationHandler = (event) => {
    setInvestmentDuration(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const investmentInput = {
      currentSavings: currentSavings,
      yearlySavings: yearlySavings,
      expectedInterest: expectedInterest,
      investmentDuration: investmentDuration,
    };

    props.onSubmit(investmentInput);
    setCurrentSavings("");
    setYearlySavings("");
    setExpectedInterest("");
    setInvestmentDuration("");
  };

  const resetHandler = () => {
    props.onReset(true);
  };

  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <div className={styles["input-group"]}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            value={currentSavings}
            onChange={currentSavingsHandler}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            value={yearlySavings}
            onChange={yearlySavingsHandler}
          />
        </p>
      </div>
      <div className={styles["input-group"]}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            value={expectedInterest}
            onChange={expectedInterestHandler}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            value={investmentDuration}
            onChange={investmentDurationHandler}
          />
        </p>
      </div>
      <p className={styles.actions}>
        <button
          type="reset"
          onClick={resetHandler}
          className={styles.buttonAlt}
        >
          Reset
        </button>
        <button type="submit" className={styles.button}>
          Calculate
        </button>
      </p>
    </form>
  );
};

export default Form;
