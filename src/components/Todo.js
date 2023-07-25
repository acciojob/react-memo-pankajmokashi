import React, { useState } from "react";

const Todo = () => {

    let [list, setList] = useState([])

    return(
        <div>
            <h2>My todos</h2>
            <div>
                {
                    list.length > 0 &&
                    list.map(item => (
                        <div>{item}</div>
                    ))
                }
            </div>
            <button onClick={() => setList([...list, "New Todo"])}>add todo</button>
        </div>
    )
}

export default Todo