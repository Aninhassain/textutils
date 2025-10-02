import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked: " +  text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase", "success");
    }

    const handleLoClick = ()=>{ 
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase", "success");
    }

    const handleClearClick = ()=>{ 
        let newText = '';
        setText(newText)
    }

    const handleOnChange = (event)=>{
        // console.log("On change");
        setText(event.target.value)
    }

    const handleCopy = () => {
        
        
        navigator.clipboard.writeText(text);
        // document.getSelection().removeAllRanges();
        props.showAlert("Copied to clipboard", "success");
    }

 
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Removed Extra Spaces", "success");
    }

    const [text, setText] = useState(''); 
  
    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}> 
            <h2 className="mb-3">{props.heading}</h2>
            <div className="mb-3"> 
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'rgb(36,74,104)':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
            </div>
            
            <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={handleExtraSpaces}>Remove Extra Spaces</button>
       
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h2>Your text summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008 *  (text.split(" ").filter((element)=>{return element.length!==0}).length)} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
        </div>
        </>
    )
}