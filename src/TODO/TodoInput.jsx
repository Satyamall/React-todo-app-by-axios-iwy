import { useState } from "react"


export default function TodoInput({onSubmit}){

    const [text,setText]=useState("");

    const handleChange=(e)=>{
         setText(e.target.value);
    }

    const handleClick=(e)=>{
        e.preventDefault();
        onSubmit(text);
    }
    return(
        <div>
            <input type="text" placeholder="Add Something....." value={text} onChange={handleChange}/>
            <button onClick={handleClick}>+</button>
        </div>
    )
}