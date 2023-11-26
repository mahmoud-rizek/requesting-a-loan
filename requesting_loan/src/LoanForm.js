export default function LoanForm() {
  return (
    <>
      <h1>LoanForm worked</h1>
      <hr />
      <form>
        <div>
          <label>Name: </label>
          <input />
        </div>
        <div>
          <label>Phone Number: </label>
          <input />
        </div>
        <div>
          <label>Age: </label>
          <input />
        </div>
        <div>
          <label>Are you an employee? </label>
          <input type="checkbox" />
        </div>
        <div>
          <label>Sallry: </label>
          <select>
            <option>Less than 500$</option>
            <option>500$</option>
            <option>More than 500$</option>
          </select>
        </div>
        <button>Submit</button>
      </form>
    </>
  );
}
