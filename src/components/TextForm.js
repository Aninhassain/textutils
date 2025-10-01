import React, { useState } from 'react'

export default function TextForm(props) {
  
  const handleUpClick = () => {
    // console.log("Uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
  }
  const handlelowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  }
  const handleOnChange = (event) => {
    setText(event.target.value);
  }
  const [text, setText] = useState('Enter the text to analyze');
  return (
    <div>
        <h1 className="text-primary">{props.heading}</h1>
    <div className="mb-3">
       
        <textarea className="form-control text-success" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>

    </div>
    <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
    <button className="btn btn-primary mx-5" onClick={handlelowClick}>Convert to Lowercase</button>
    </div>
    
  )
}
