import { flushSync } from "react-dom";
import "./FormStyles.css";
import Model from "./Model";
import MyComponent from "./MyComponent";
import { LoanInputContext } from "../contexts/LoanFormInputContext";
import { useState } from "react";

export default function LoanForm() {
  const [errorMessage, setErrorMessage] = useState(null);
  const [showModel, setShowModel] = useState(false);
  const [loanInputs, setLoanInputs] = useState({
    name: "",
    phone: "",
    age: "",
    sallryRange: "Less than 500$",
    isEmployee: false,
  });
  const btDisable =
    loanInputs.name == "" || loanInputs.age == "" || loanInputs.phone == "";
  function handelClick(event) {
    event.preventDefault();

    setErrorMessage(null);
    const { age, phone } = loanInputs;
    if (age < 18 || age > 80) {
      setErrorMessage("The age is not allowed!");
    } else if (phone.length < 10 || phone.length > 12) {
      setErrorMessage("The Phone Number Format Is Incorrect!");
    }

    setShowModel(true);
  }
  function handelPhoneInput(value) {
    setLoanInputs({ ...loanInputs, phone: value });
  }

  function handelNameInput(value) {
    setLoanInputs({ ...loanInputs, name: value });
  }

  function handelAgeInput(value) {
    setLoanInputs({ ...loanInputs, age: value });
  }
  return (
    <div
      className="flex"
      style={{ flexDirection: "column" }}
      onClick={() => {
        if (showModel) {
          setShowModel(false);
        }
      }}
    >
      <form className="flex" id="loan-form" style={{ flexDirection: "column" }}>
        <h1>Requesting a loan</h1>
        <hr />
        <LoanInputContext.Provider
          value={{
            labelTitle: "Name",
            value: loanInputs.name,
            handleChange: handelNameInput,
          }}
        >
          <MyComponent />
        </LoanInputContext.Provider>

        <LoanInputContext.Provider
          value={{
            labelTitle: "Phone Number",
            value: loanInputs.phone,
            handleChange: handelPhoneInput,
          }}
        >
          <MyComponent />
        </LoanInputContext.Provider>
        <LoanInputContext.Provider
          value={{
            labelTitle: "Age",
            value: loanInputs.age,
            handleChange: handelAgeInput,
          }}
        >
          <MyComponent />
        </LoanInputContext.Provider>

        <label style={{ marginTop: "30px" }}>Are you an employee? </label>
        <input
          type="checkbox"
          checked={loanInputs.isEmployee}
          onChange={(event) =>
            setLoanInputs({ ...loanInputs, isEmployee: event.target.checked })
          }
        />

        <label>Sallry: </label>
        <select
          value={loanInputs.sallryRange}
          onChange={(event) =>
            setLoanInputs({ ...loanInputs, sallryRange: event.target.value })
          }
        >
          <option>Less than 500$</option>
          <option>Between 500$ to 2000</option>
          <option>Above 2000$</option>
        </select>

        <button
          className={btDisable ? "disabled" : ""}
          id="sumit-laon-btn"
          disabled={btDisable}
          onClick={handelClick}
        >
          Submit
        </button>
      </form>
      <Model isVisabled={showModel} errorMessage={errorMessage} />
    </div>
  );
}
