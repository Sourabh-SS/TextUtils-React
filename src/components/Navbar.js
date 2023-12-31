import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'

export default function Navbar(props) {
  
  return (

    <nav className={`navbar navbar-expand-lg navbar-${props.stateMode} bg-${props.stateMode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">{props.text}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        {/* <li className="nav-item">
          <Link className="nav-link" to="/about">{props.link}</Link>
        </li> */}
        </ul>
    
    
    <button type="button" onClick={()=>props.bgo("green")} className="btn btn-success rounded-circle btn-sm mx-2">Green</button>
    <button type="button" onClick={()=>props.bgo("red")} className="btn btn-danger rounded-circle btn-sm mx-2 me-3">Red</button>
    
    
        
      
      <div className={`form-check form-switch text-${(props.stateMode==='light')?'dark':'light'}`}>
  <input className="form-check-input" onChange={props.enableDM} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
</div>
    </div>
  </div>
</nav>

  )
}

Navbar.propTypes={text: PropTypes.string.isRequired,
    link: PropTypes.string}

Navbar.defaultProps = {
    text: "Title",
    link: "About"
}
