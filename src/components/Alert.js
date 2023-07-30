import React from 'react'

export default function Alert(props) {
  const capFirstLetter=(str)=>{
    let newStr=str.toLowerCase();
    return newStr.charAt(0).toUpperCase()+newStr.slice(1);
  }
  return (
    
      props.alert && <div className={`alert alert-${props.alert.type}`} role="alert">
  <strong>{capFirstLetter(props.alert.type)}</strong>: {props.alert.msg}
</div>
    
  )
}
