import React, { useState } from "react";

export default function UserText(props) {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const convertUpper = () => {
    let upperText = text.toUpperCase();
    setText(upperText);
    props.showAlert("Converted to uppercase!", "Success");
  };

  const convertLower = () => {
    let lowerText = text.toLowerCase();
    setText(lowerText);
    props.showAlert("Converted to lowercase!", "Success");
  };

  const clearText = () => {
    setText("");
    props.showAlert("Text cleared!", "Success");
  };

  const copyText = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to Clipboard!", "success");
  };
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "#FEFBF6" : "#2C3333" }}
      >
        <div className="mb-3 my-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            <strong> Enter your Text </strong>
          </label>
          <textarea
            className="form-control"
            id="inputText"
            rows="8"
            onChange={handleChange}
            value={text}
            style={{
              backgroundColor: props.mode === "dark" ? "#395B64" : "#F9F3EE",
              color: props.mode === "dark" ? "#F9F3EE" : "#395B64",
            }}
          ></textarea>
        </div>

        <button
          type="button"
          onClick={convertUpper}
          className="btn btn-primary mx-3 my-3"
          disabled={!text}
        >
          Convert to UpperCase
        </button>
        <button
          type="button"
          onClick={convertLower}
          className="btn btn-primary mx-3 my-3"
          disabled={!text}
        >
          Convert to LowerCase
        </button>

        <button
          type="button"
          onClick={clearText}
          className="btn btn-primary mx-3 my-3"
          disabled={!text}
        >
          Clear Text
        </button>

        <button
          type="button"
          onClick={copyText}
          className="btn btn-primary mx-3 my-3"
          disabled={!text}
        >
          Copy Text
        </button>

        <h2 className="mt-5">Charecters and word Count</h2>
        <p>
          Charecters: {text.length} and Words:{" "}
          {text.split(" ").filter((el) => el.length > 0).length}
        </p>
        <h2 className="mt-5">Preview</h2>
        <p>{text ? text : "Nothing to preview"}</p>
      </div>
    </>
  );
}
