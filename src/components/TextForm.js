import React , {useState} from 'react'

export default function TextForm(props) {
    const changeToUpperCase=()=>{
        let newText=text.toUpperCase();
        setText(newText);
    }
    const changeToLowerCase=()=>{
        let newText=text.toLowerCase();
        setText(newText);
    }
    const clearIt=()=>{
        setText("");
    }
    const changeToUpper=(event)=>{
        setText(event.target.value);    
    }
    const [text,setText]=useState("");
  return (
    <>
    <div className="container">
    
<div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label">{props.heading}</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" value={text} placeholder='Enter Text' onChange={changeToUpper}></textarea>
</div>
  <button type="button" className="btn btn-success mx-1" onClick={changeToUpperCase}>Uppercase</button>
  <button type="button" className="btn btn-success mx-1" onClick={changeToLowerCase}>Lowercase</button>
  <button type="button" className="btn btn-success mx-1" onClick={clearIt}>Clear</button>
  </div>
    
  <div className="container my-3">
  <h5>Summary of Text</h5>
  <p>Number of Words = {(text.charAt(text.length-1)==="" || text.charAt(text.length-1)===" ")?text.split(" ").length-1:text.split(" ").length} and Number of Characters = {text.length}</p>
  <p>Reading Time = {text.split("").length * 0.008} minutes</p>
  </div>
  
</>
  )
}
