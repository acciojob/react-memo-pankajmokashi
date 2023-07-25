import React, { useState } from "react";

const Count = () => {

    let [count, setCount] = useState(1000000000)

    return(
        <div>
            <div className="display-count">Count : 0</div>
            <button onClick={() => setCount(count * 10)}>+</button>
            <h2>Expensive Calculation</h2>
            <div>{count}</div>
        </div>
    )
}

export default Count