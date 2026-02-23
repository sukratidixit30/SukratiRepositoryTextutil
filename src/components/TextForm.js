import React, { useState } from 'react';

export default function TextForm(props) {

 const [text, setText] = useState("enter the value");
   // Text Summary Logic
  // const words = text.split(" ").length;
  // const characters = text.length;
  const words = text.trim().length === 0 ? 0 : text.trim().split(/\s+/).length;
  const characters = text.replace(/\s/g, "").length;
 const handleOnChange = (e) => {
    setText(e.target.value);
 }
 const handleUpClick = () => {
   const newText = text.toUpperCase();
    setText(newText);
 }

  const handleSentanceClick =() =>{
    if (text.length === 0) return;
    let newText =
    text.charAt(0).toUpperCase() +
    text.slice(1).toLowerCase();
    setText(newText);
 }

 const handleClearClick = () => {
    let newText = '';
    setText(newText);
 }

 const handleCapClick = () => {
      if (!text) return;
    let newText = text.toLowerCase().split(" ").map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(" ");
    setText(newText);
 }

 /*const countVowels = () => {
    if (!text) return;
    let count = text.match(/[aeiou]/gi)?.length || 0;
    //console.log(newText);
    alert(`Number of vowels: ${count}`);
  }
 
  const handleReplaceChange = () => {
    if (!text) return;
    let newText = text.replaceAll("yguh", "Hello");
    //console.log(newText);
    setText(newText);
  }
 
  const handleInverseclick  = () => {
    if (!text) return;
    let newText = text.split("").reverse().join("");
    //console.log(newText);
    setText(newText);
  }*/

 const handleExtraSpaces  = () => {
    if (!text) return;
    let newText = text.replace(/\s+/g, " ").trim();
    setText(newText);
 }

 const handleSpeak = () => {
    if (!text) return;
    let msg = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(msg);
    //console.log(newText);
    
 }

const handleCopy = () => {
  if (!text) return;
  navigator.clipboard.writeText(text);
};




 //setText('Enter the ytext hereee');
  return (
    <>
        <div className="container my-3">
            <h1>
                {props.heading}
            </h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8">
            </textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert in Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleSentanceClick}>Convert in Sentance</button>
            <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear</button>
            <button className="btn btn-primary mx-2" onClick={handleCapClick}>Capitalize</button>
            <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Space</button>
            <button className="btn btn-primary mx-2" onClick={handleSpeak}>Speak</button>
            <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
           {/*} <button className="btn btn-primary mx-2" onClick={countVowels}>Count Vowels</button>
            <button className="btn btn-primary mx-2" onClick={handleReplaceChange}>Replace Change</button>
            <button className="btn btn-primary mx-2" onClick={handleInverseclick }>Inverse</button>  */}
        </div>
        <div className="container my-3">
            <h2> Your Text Summary</h2>
            <p>{words} words and {characters} character</p>
            <p>{0.008 * words.toFixed(2)} minutes to read</p>
            <h2>Preview</h2>
            <p>{text.length>0 ? text : 'Enter something in the text box above to preview it'}</p>
        </div>
    </>
      
    
  )
}
