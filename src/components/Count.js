import React, { useState } from "react";

const Count = () => {

    let [calc, setClc] = useState(1000000000)
    let [count, setCount] = useState(0)

    function changeHandle(){
        setCount(++count)
        setClc(++calc)
    }

    return(
        <div>
            <div className="incr-cnt">Count : {count}</div>
            <button className="incr-btn" onClick={changeHandle}>+</button>
            <h2>Expensive Calculation</h2>
            <div className="calc">{calc}</div>
        </div>
    )
}

export default Count