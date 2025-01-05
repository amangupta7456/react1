import React, {useState} from 'react';



export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText = Text.toUpperCase();
        setText(newText);
    };
    const handleOnChange = (event)=>{
        setText(event.target.value);
    };
    const[Text, setText] = useState("Enter text here");
  return (
    <div>
        <h1>{props.heading}</h1>
        <div   className="mb-3">
        <textarea   className="form-control" value={Text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>
    </div>
  );
}
