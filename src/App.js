import { useState } from "react";
import logo from "./assets/investment-calculator-logo.png";
import Investments from "./Components/Investments/Investments";
import Form from "./Components/NewInvestment/InvestmentForm";
import Header from "./Components/UI/Header";
import Table from "./Components/UI/Table";

function App() {
  const [title_, setTitle] = useState("Header Title");
  const [logo_, setLogo] = useState(logo);
  const [yearlyData, setYearlyData] = useState([]);  
  const calculateHandler = (userInput) => {
    
    // You might not directly want to bind it to the submit event on the form though...
    let currentSavings = +userInput.currentSavings; // + convert a variable to number if possible
    let yearlyContribution = +userInput.yearlySavings;
    const expectedReturn = +userInput.expectedInterest / 100;
    const duration = +userInput.investmentDuration;

    for (let i = 0; i < duration; i++) {
      let totalSavings_, totalYearlyContribution_;
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      totalSavings_ = currentSavings++;
      totalYearlyContribution_ = yearlyContribution++;

      const data = {
        id: Math.random().toString(),
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
        totalYearlyContribution: totalYearlyContribution_,
        totalSavings: totalSavings_,
      };
      setYearlyData((prevData) => {
        return [data, ...prevData];
      });
    }
  };
  
  const resetHandler = (val) => {
    if(val){
      setYearlyData([]);
    };
  }

  return (
    <div>
      <Header imageAtr={logo_} title={title_} />
      <Form onSubmit={calculateHandler} onReset={resetHandler}/>
      <Table>
        <thead>
          <tr>
            <th>Year</th>
            <th>Total Savings</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <Investments myList={yearlyData}/>
      </Table>
    </div>
  );
}

export default App;
