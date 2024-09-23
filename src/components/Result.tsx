import { calculateInvestmentResults, formatter } from "../util/investment.ts";

type UserInputType = {
  initialInvestment: number;
  annualInvestment: number;
  expectedReturn: number;
  duration: number;
};

type ResultDataProps = {
  year: number;
  interest: number;
  valueEndOfYear: number;
  annualInvestment: number;
};

const Result = ({ input }: { input: UserInputType }) => {
  const resultData: ResultDataProps[] = calculateInvestmentResults(input);
  const intialInvestment =
    resultData[0].valueEndOfYear -
    resultData[0].interest -
    resultData[0].annualInvestment;

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {resultData.map((yearData: ResultDataProps) => {
          const totalInterest =
            yearData.valueEndOfYear -
            intialInvestment -
            yearData.annualInvestment * yearData.year;

          const totalAmountInvested = yearData.valueEndOfYear - totalInterest;

          return (
            <tr key={yearData.year}>
              <th>{yearData.year}</th>
              <th>{formatter.format(yearData.valueEndOfYear)}</th>
              <th>{formatter.format(yearData.interest)}</th>
              <th>{formatter.format(totalInterest)}</th>
              <th>{formatter.format(totalAmountInvested)}</th>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Result;
