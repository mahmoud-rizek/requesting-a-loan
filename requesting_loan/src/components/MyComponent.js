import MyInput from "./MyInput";
export default function MyComponent({ inputName, value, handleChange }) {
  return (
    <>
      <h3>this is header</h3>
      <MyInput />
      <h3>this is footer</h3>
    </>
  );
}
