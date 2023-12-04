import { useContext } from "react";
import { LoanInputContext } from "../contexts/LoanFormInputContext";
export default function MyInput() {
  const myContext = useContext(LoanInputContext);

  console.log("the context form myinput is");
  console.log(myContext);

  return (
    <>
      <label>{myContext.labelTitle}: </label>
      <input
        value={myContext.value}
        onChange={(event) => myContext.handleChange(event.target.value)}
      />
    </>
  );
}
