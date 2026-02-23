
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
//import About from './components/About';
import React, {useState} from 'react';
function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = () =>{
    if(mode === 'dark'){
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
    else {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
    }
  }
  return (
    <>
    <Navbar title="MyTextutil" aboutUs="About" mode={mode} toggleMode={toggleMode}/>
    <TextForm heading="Enter the text to analyse" mode={mode}></TextForm>
    {/*<About/>*/}
    </>
     
  );
}

export default App;
