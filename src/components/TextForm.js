import React , {useState} from 'react'

export default function TextForm(props) {
    const changeToUpperCase=()=>{
        let newText=text.toUpperCase();
        setText(newText);

        props.showIt("Converted to UpperCase","success");
    }
    const changeToLowerCase=()=>{
        let newText=text.toLowerCase();
        setText(newText);
        props.showIt("Converted to LowerCase","success");
    }
    const clearIt=()=>{
        setText("");
        props.showIt("Flushed!!","success");
    }
    const changeToUpper=(event)=>{
        setText(event.target.value);    
    }
    const [text,setText]=useState("");
  return (
    <>
    <div className="container">
    
<div className="mb-3" style={{color: (props.stateMode==="light")?"black":"white"}}>
  <label htmlFor="exampleFormControlTextarea1" className="form-label my-3 h3">{props.heading}</label>
  <textarea style={{backgroundColor: (props.stateMode==="light")?"white":"grey",color: (props.stateMode==="light")?"black":"white"}} className="form-control" id="exampleFormControlTextarea1" rows="8" value={text} placeholder='Enter Text' onChange={changeToUpper}></textarea>
</div>
  <button type="button" className="btn btn-success mx-1" onClick={changeToUpperCase}>Uppercase</button>
  <button type="button" className="btn btn-success mx-1" onClick={changeToLowerCase}>Lowercase</button>
  <button type="button" className="btn btn-success mx-1" onClick={clearIt}>Clear</button>
  </div>
    
  <div className="container my-3" style={{color: (props.stateMode==="light")?"black":"white"}}>
  <h5>Summary of Text</h5>
  <p>Number of Words = {(text.charAt(text.length-1)==="" || text.charAt(text.length-1)===" ")?text.split(" ").length-1:text.split(" ").length} and Number of Characters = {text.length}</p>
  <p>Reading Time = {text.split("").length * 0.008} minutes</p>
  </div>
  
</>
  )
}
