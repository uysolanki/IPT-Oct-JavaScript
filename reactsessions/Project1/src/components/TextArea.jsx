import React from 'react'
import './TextArea.css'
import { useState } from 'react'
import Button from './Button'
const TextArea = () => {

     const [text,setText]=useState("")
     const [previewtext,setPreviewtext]=useState("")
     function handleOnchangeIntextArea(event)
     {
            setText(event.target.value)
            setPreviewtext(event.target.value)
     }

     function handleUpperCase()
     {
        setPreviewtext(previewtext.toUpperCase())
     }

     function handleLowerCase()
     {
        setPreviewtext(previewtext.toLowerCase())
     }
  return (
    <>
    <div id="parent-container">
        <div id="left">
            <textarea
                rows="10"
                cols="50"
                value={text}
                onChange={handleOnchangeIntextArea}
            >
            </textarea>
            <div id="button-container">
                <button onClick={handleUpperCase}>UpperCase</button>
                <button onClick={handleLowerCase}>LowerCase</button>
                <Button text="UpperCase" handleClick={handleUpperCase} />
                <Button text="LowerCase" handleClick={handleLowerCase} />
            </div>


        </div>

         <div id="right">
            <h3>Preview</h3>
            <p>
                {previewtext}
            </p>
            <span>Word Count : {text.trim().split(" ").length}</span>
            <span>Time Taken To Read : {(text.trim().split(" ").length/60).toFixed(2)} minutes</span>

        </div>
    </div>
    </>
  )
}

export default TextArea