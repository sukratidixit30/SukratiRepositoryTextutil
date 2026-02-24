
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
//import About from './components/About';
import React, {useState} from 'react';
function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () =>{
    if(mode === 'dark'){
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mod has been enabled", "success");
      //document.title = 'Dark mode enabled';
    }
    else {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mod has been enabled", "success");
      //document.title = 'Light mode enabled';
    }
  }
  return (
    <>
    <Navbar title="MyTextutil" aboutUs="About" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <TextForm heading="Try TextUtils - Word Counter, Character Counter, Remove extra spaces" showAlert={showAlert} mode={mode}></TextForm>
    {/*<About/>*/}
    </>
     
  );
}

export default App;
