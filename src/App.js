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
    }
    else{
      document.body.style.backgroundColor="white";
      setMode("light");
      showAlert("LightMode Enabled!!","success");
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

    <Navbar text="TextUtilis" stateMode={mode} enableDM={enableDarkMode}/>
    <Alert alert={alert}/>
    <div className="container"><TextForm heading="Text Converter" stateMode={mode} showIt={showAlert}/></div>

    
    
    
    </>
    
  );
}

export default App;
