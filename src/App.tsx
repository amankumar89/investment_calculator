import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Result from "./components/Result";

type UserInputType = {
  initialInvestment: number;
  annualInvestment: number;
  expectedReturn: number;
  duration: number;
};

function App() {
  const [userInput, setUserInput] = useState<UserInputType>({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 7,
    duration: 10,
  });

  const isValidInput = userInput.duration >= 1;

  const handleChange = (keyName: string, keyValue: number) => {
    setUserInput((prevInput: UserInputType) => {
      return {
        ...prevInput,
        [keyName]: +keyValue,
      };
    });
  };

  return (
    <>
      <Header />
      <UserInput userInput={userInput} handleChange={handleChange} />
      {!isValidInput && (
        <p className="center">Please enter duration greater than zero.</p>
      )}
      {isValidInput && <Result input={userInput} />}
    </>
  );
}

export default App;
