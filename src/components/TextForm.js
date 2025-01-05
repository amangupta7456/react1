import React, {useState} from 'react';



export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText = Text.toUpperCase();
        setText(newText);
    };
    const handleLoClick = ()=>{
      let newText = Text.toLowerCase();
      setText(newText);
    };
    const handleOnChange = (event)=>{
        setText(event.target.value);
    };
    const[Text, setText] = useState("");
  return (
  <>
    <div className="container">
        <h1>{props.heading}</h1>
        <div   className="mb-3">
        <textarea   className="form-control" value={Text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>

        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
    </div>
    <div className="container">
        <h2>Your text summary</h2>
        <p>{Text.split(" ").length} words and {Text.length} characters</p>
        <p>{0.008 * Text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{Text}</p>
    </div>
  </>
  );
}
