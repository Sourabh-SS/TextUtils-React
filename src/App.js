import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert'
import './App.css';
import { useState } from 'react';

function App() {
  const [mode,setMode]=useState("light");
  const enableDarkMode=()=>{
    if(mode==="light"){
      document.body.style.backgroundColor="#1a376d";
      setMode("dark");
      showAlert("DarkMode Enabled!!","success");
      document.title="TextUtils - DarkMode"
    }
    else{
      document.body.style.backgroundColor="white";
      setMode("light");
      showAlert("LightMode Enabled!!","success");
      document.title="TextUtils - LightMode"
    }
  };
  const bgChange=(bgState)=>{
      if(mode==="dark" && bgState==="green"){
        document.body.style.backgroundColor="green";}
        
      else if(mode==="dark" && bgState==="red"){
        document.body.style.backgroundColor="red";}
      
      else{
        document.body.style.backgroundColor="white";
      }
  };
  const [alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg: message,
      type: type

    });
    setTimeout(()=>{
      setAlert(null);
    },1000);
  };



  return (
    <>

    <Navbar text="TextUtilis" stateMode={mode} enableDM={enableDarkMode} bgo={bgChange}/>
    <Alert alert={alert}/>
    <div className="container"><TextForm heading="Text Converter" stateMode={mode} showIt={showAlert}/></div>

    
    
    
    </>
    
  );
}

export default App;
