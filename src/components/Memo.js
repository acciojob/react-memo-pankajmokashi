import React, { useState } from "react";

const Memo = () => {

    let [inputValue, setInputValue] = useState("")
    let [list, setList] = useState([])

    return(
        <div>
            <h2>React.memo</h2>
            <input type="text" onChange={(e) => setInputValue(e.target.value)} value={inputValue}></input>
            <button onClick={() => {
                setList([...list, inputValue]);
                setInputValue("");
            }}>submit</button>
            <ul>
                {
                    list.length > 0 &&
                    list.map(item => (
                        <li>{item}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Memo