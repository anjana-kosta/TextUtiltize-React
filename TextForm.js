import { useState } from "react";

export default function TextForm(props) {
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("converted to upeercase", "success")
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("converted to lowercase", "success")
  };

  const handleclearClick = () => {
    let newText = '';
    setText(newText);
    props.showAlert("Cleared text", "success")
  };

  const handleCopy = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Converted copy to clipboard", "success")
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(""));
    props.showAlert("Remove extra spaces", "success")
  };

  const onAlternatingCase = () => {
    let newtext = "";
    for (let index = 0; index < text.length; index++) {
      // eslint-disable-next-line eqeqeq
      if (index % 2 == 0) {
        newtext += text[index].toLowerCase();
      } else {
        newtext += text[index].toUpperCase();
      }
    }
    setText(newtext);
  };

  const reverseText = () => {
    let newText = text.split("").reverse().join("");
    setText(newText);
    props.showAlert("converted to reverse text", "success")
  };

  const handleReClick = () => {
    // console.log("On change");
    let splitString = text.split(""); // var splitString = "hello".split("");
    // ["h", "e", "l", "l", "o"]

    // Step 2. Use the reverse() method to reverse the new created array
    let reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
    // ["o", "l", "l", "e", "h"]

    // Step 3. Use the join() method to join all elements of the array into a string
    let joinArray = reverseArray.join("");
    setText(joinArray);
    props.showAlert("converted to re click text", "success")
  };

  const handleRedundancy = () => {
    let set1 = new Set(text.split(" "));
    let newText = Array.from(set1).join(" ");
    setText(newText);
  };

  // Function is able to eliminate the redundant words from the sentence or para

  const sort = () => {
    let sorting = text.split(" ");
    sorting = sorting.sort();
    let mem = "";
    for (let i of sorting) {
      mem += i + " ";
    }
    setText(mem);
    props.showAlert("converted to sorting text", "success")
  };

  function speaktext() {
    var speech = new SpeechSynthesisUtterance();
    speech.text = text;
    speech.volume = 12;
    speech.rate = 1;
    speech.pitch = 1;
    window.speechSynthesis.speak(speech);
    props.showAlert("converted to speck test", "success")
  }

  const capitalFirstLetter = () => {
    let tempText = text.split(/[  ]+/);
    let newText = "";
    tempText.forEach((e) => {
      e = e.charAt(0).toUpperCase() + e.slice(1);
      newText = newText + e + " ";
    });
    setText(newText);
    props.showAlert("converted to first upeercase letter", "success")
  };

  //same first letter capitals
  const handleTitleClick = () => {
    let newText = text.replace(/\w\S*/g, function (t) {
      return t.charAt(0).toUpperCase() + t.substr(1).toLowerCase();
    });
    setText(newText);
    props.showAlert("converted to title text", "success")
  };

  const handleFindEmail = () => {
    let reg = /[a-z0-9]+@[a-z]+\.[a-z]+/gm;
    let n = text.match(reg);

    setText(n[0] + " " + n[1]);
  };

  const [text, setText] = useState("");
  //text = "new text"; //wrong wat to change the state
  //settext("new text"); //correct way ti change the state
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to upper case
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>
          Convert to lower case
        </button>
        <button className="btn btn-primary mx-1" onClick={handleclearClick}>
          Clear text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>
          Copy text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>
          Remove Extra spaces
        </button>
        <button className="btn btn-primary mx-1" onClick={onAlternatingCase}>
          Alternatice Text
        </button>
        <button className="btn btn-primary mx-1" onClick={reverseText}>
          Reverse Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleReClick}>
          Rechange Text
        </button>
        <button
          className="btn btn-primary mx-1 mt-2"
          onClick={handleRedundancy}
        >
          Delete Duplecate Text
        </button>
        <button className="btn btn-primary mx-1 mt-2" onClick={sort}>
          Sorting Text
        </button>
        <button className="btn btn-primary mx-1 mt-2" onClick={speaktext}>
          speak Text
        </button>
        <button
          className="btn btn-primary mx-1 mt-2"
          onClick={capitalFirstLetter}
        >
          First Capital Text
        </button>
        <button
          className="btn btn-primary mx-1 mt-2"
          onClick={handleTitleClick}
        >
          Title Text
        </button>
        <button className="btn btn-primary mx-1 mt-2" onClick={handleFindEmail}>
          Find Email
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1>Your Text summary</h1>
        <p>
          {text.split(" ").length} word and {text.length}
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something in the textbox above to preview here"}
        </p>
      </div>
    </>
  );
}
