import "./FormStyles.css";
import Model from "./Model";
export default function LoanForm() {
  return (
    <div className="flex" style={{ flexDirection: "column" }}>
      <form className="flex" id="loan-form" style={{ flexDirection: "column" }}>
        <h1>Requesting a loan</h1>
        <hr />

        <label>Name: </label>
        <input />

        <label>Phone Number: </label>
        <input />

        <label>Age: </label>
        <input />

        <label style={{ marginTop: "30px" }}>Are you an employee? </label>
        <input type="checkbox" />

        <label>Sallry: </label>
        <select>
          <option>Less than 500$</option>
          <option>500$</option>
          <option>More than 500$</option>
        </select>

        <button id="sumit-laon-btn">Submit</button>
      </form>
      {/* <Model /> */}
    </div>
  );
}
