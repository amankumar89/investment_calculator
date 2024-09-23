import { FC } from "react";

type UserInputType = {
  initialInvestment: number;
  annualInvestment: number;
  expectedReturn: number;
  duration: number;
};

type UserInputProps = {
  userInput: UserInputType;
  handleChange: (keyName: string, keyValue: number) => void;
};

const UserInput: FC<UserInputProps> = ({ userInput, handleChange }) => {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="">Initial Investment</label>
          <input
            value={userInput.initialInvestment}
            type="number"
            required
            onChange={(e) => handleChange("initialInvestment", +e.target.value)}
          />
        </p>
        <p>
          <label htmlFor="">Annual Investment</label>
          <input
            value={userInput.annualInvestment}
            type="number"
            required
            onChange={(e) => handleChange("annualInvestment", +e.target.value)}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="">Expected Return</label>
          <input
            value={userInput.expectedReturn}
            type="number"
            required
            onChange={(e) => handleChange("expectedReturn", +e.target.value)}
          />
        </p>
        <p>
          <label htmlFor="">Duration</label>
          <input
            value={userInput.duration}
            type="number"
            required
            onChange={(e) => handleChange("duration", +e.target.value)}
          />
        </p>
      </div>
    </section>
  );
};
export default UserInput;
