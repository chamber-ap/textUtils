import React, { useState } from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked"+ text)
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Case has been changed to Uppercase", "success")
    }
    const handleLoClick = ()=>{
      // console.log("lowercase was clicked"+ text)
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("Case has been changed to Lowercase","success")

  }

  const handleCopy = ()=>{
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writetext(text.value);
    props.showAlert("Text is Copied", "success");

  }

  const handleExtraSpaces =()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces Removed", "success");

  }
  const handleClearClick = ()=>{
    let newText = "";
    setText(newText);
    props.showAlert("Text is cleared!", "success");
  }

    const handleOnChange = (event)=>{
        // console.log("on Change")
        setText(event.target.value)
    }
    const [text, setText] = useState('');
  return (
    <>
    <div className='container' style={{color: props.mode=== 'light'? 'black' : 'white'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode=== 'dark' ? 'rgb(107 146 177)' : 'white', color: props.mode=== 'light'? 'black' : 'white' }} id="myBox" rows="10"></textarea>
        </div>
      <button disabled= {text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
      <button disabled= {text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Convert to Lowercase</button>
      <button disabled= {text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy Text</button>
      <button disabled= {text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
      <button disabled= {text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear</button>
    </div>
    <div className="container my-3" style={{color: props.mode=== 'light'? 'black' : 'white'}}>
      <h2>Your Text Summary</h2>
      <p>{text.split(/\s+/).filter((element)=>{return element.length !== 0}).length} words and {text.length}</p>
      <p>{0.008 * text.split(/\s+/).filter((element)=>{return element.length !== 0}).length} Minutes to read</p>
      <h2>PREVIEW</h2>
      <p>{text}</p>
    </div>
    </>
  )
}
