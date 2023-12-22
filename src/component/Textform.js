import React, { useState } from "react";

export default function TextForm({ heading, mode,showAlert}) {
  const handleUpClick = () => {
    console.log("UpperCase bTN was click" + text);
    setText("TAx was changed");
    let newTax = text.toUpperCase();
    setText(newTax);
    showAlert("Text is UpperCase","success")
  };
  const handleCapital = () => {
    function capitalizeFirstLetter(string) {
      // return string.charAt(0).toUpperCase() + string.slice(1);
      return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    }
    console.log("UpperCase bTN was click");
    let newTax = capitalizeFirstLetter(text);
    setText(newTax);
    console.log(newTax);
    showAlert("Text is capitalize","success")
  };
  const handleClear = () => {
    setText("");
    showAlert("Text is Clear","success")
  };
  const handleCopy = () => {
    // Get the text field
    var copyText = document.getElementById("exampleFormControlTextarea1");

    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);

    // Alert the copied text
    alert("Copied the text: " + copyText.value);
    showAlert("Text is Copy","success")
  };
  const handleOnchnage = (event) => {
    console.log("UpperCase bTN was click");
    setText(event.target.value);
  };

  const [text, setText] = useState("");

  return (
    <>
      <div className="container">
        <div className="my-3">
          <label
            htmlFor="exampleFormControlTextarea1"
            className={`form-label text-${mode === "light" ? "dark" : "light"}`}
          >
          <h3>{heading}</h3>
            
          </label>
          <textarea
            className={`form-control text-${
              mode === "light" ? "dark" : "light"
            } bg-${mode === "light" ? "light" : "dark"}`}
            id="exampleFormControlTextarea1"
            value={text}
            onChange={handleOnchnage}
            rows={8}
            defaultValue={""}
          />
          <button
            type="button"
            className="btn btn-success my-3"
            onClick={handleUpClick}
          >
            Convert to UpperCase
          </button>
          <button
            type="button"
            className="btn btn-success my-3 mx-3"
            onClick={handleCapital}
          >
            Convert to Capitalize
          </button>
          <button
            type="button"
            className="btn btn-success my-3"
            onClick={handleClear}
          >
            Clear Text
          </button>
          <button
            type="button"
            className="btn btn-success my-3 mx-3"
            onClick={handleCopy}
          >
            Copy Text
          </button>
        </div>
        <div className="container" style={{color:`${mode==="light"? "black":"white"}`}}>
          <h4>text context</h4>
          <p>
            {text.trim().length > 0 ? (
              <>
                {text.split(" ").length} word and {text.length} characters
              </>
            ) : (
              "0 word and 0 characters"
            )}
            {/* {text.split(" ").length} word and {text.length} characters */}
          </p>
          <p>Take time to read {0.008 * text.split(" ").length} minutes</p>
          <h3>Preview</h3>
          <hr></hr>
          <h6>{`${text.length===0?"plz enter the text for preview.....":text}`}</h6>
        </div>
      </div>
    </>
  );
}
