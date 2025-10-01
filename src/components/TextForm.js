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
  const handleClearClick = () => {
    setText('');
  }
 
  const [text, setText] = useState('');
  return (
    <> 
    <div className='container'>
        <h1 className="text-primary">{props.heading}</h1>
    <div className="mb-3">
       
        <textarea className="form-control text-success" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>

    </div>
    <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
    <button className="btn btn-primary mx-5" onClick={handlelowClick}>Convert to Lowercase</button>
    
    <button className="btn btn-primary mx-3" onClick={handleClearClick}>Clear Text</button>
    </div>
    <div className="container my-3 text-info">
      <h2>Your text summary</h2>
      <p className="text-dark"> {text.split(" ").length-1} words and {text.length} characters</p>
      <p className="text-dark"> {0.008 * (text.split(" ").length-1)} Minutes read</p>
      <h3> Preview </h3>
      <p className="text-dark"> {text} </p>
    </div>
    </>
    
  )
}
