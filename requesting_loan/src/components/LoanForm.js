import { flushSync } from "react-dom";
import "./FormStyles.css";
import Model from "./Model";
import { useState } from "react";

export default function LoanForm() {
  const [loanInputs, setLoanInputs] = useState({
    name: "",
    phone: "",
    age: "",
    sallryRange: "Less than 500$",
    isEmployee: false,
  });
  const btDisable =
    loanInputs.name == "" || loanInputs.age == "" || loanInputs.phone == "";

  return (
    <div className="flex" style={{ flexDirection: "column" }}>
      <form className="flex" id="loan-form" style={{ flexDirection: "column" }}>
        <h1>Requesting a loan</h1>
        <hr />

        <label>Name: </label>
        <input
          value={loanInputs.name}
          onChange={(event) =>
            setLoanInputs({ ...loanInputs, name: event.target.value })
          }
        />

        <label>Phone Number: </label>
        <input
          value={loanInputs.phone}
          onChange={(event) =>
            setLoanInputs({ ...loanInputs, phone: event.target.value })
          }
        />

        <label>Age: </label>
        <input
          value={loanInputs.age}
          onChange={(event) =>
            setLoanInputs({ ...loanInputs, age: event.target.value })
          }
        />

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
          onClick={(event) => {
            event.preventDefault();
            alert("hello");
            console.log(btDisable);
          }}
        >
          Submit
        </button>
      </form>
      {/* <Model /> */}
    </div>
  );
}
