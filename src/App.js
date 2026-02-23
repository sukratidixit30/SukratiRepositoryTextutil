
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App() {
  return (
    <>
    <Navbar title="MyTextutil" aboutUs="About"/>
    <TextForm heading="Enter the text to analyse"></TextForm>
    </>
     
  );
}

export default App;
