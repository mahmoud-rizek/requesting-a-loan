import "./FormStyles.css";

export default function Model({ isVisabled, errorMessage = null }) {
  if (isVisabled) {
    return (
      <div id="model">
        <div id="model-content">
          <h1 style={{ color: errorMessage ? "red" : "green" }}>
            {errorMessage != null
              ? errorMessage
              : "The Form Has Been Sumited Successfully"}
          </h1>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}
