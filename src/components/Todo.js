import React, { useState } from "react";

const Todo = () => {

    let [list, setList] = useState([])

    return(
        <div>
            <h2>My todos</h2>
            <div className="todo-0">
                {
                    list.length > 0 &&
                    list.map(item => (
                        <div>{item}</div>
                    ))
                }
            </div>
            <button className="add-todo-btn" onClick={() => setList([...list, "New Todo"])}>Add Todo</button>
        </div>
    )
}

export default Todo