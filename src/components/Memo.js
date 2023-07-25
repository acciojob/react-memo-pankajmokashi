import React, { useState } from "react";

const Memo = () => {

    let [inputValue, setInputValue] = useState("")
    let [list, setList] = useState([])

    function hadleChange(){
        if(inputValue.length > 5){
            setList([...list, inputValue]);
            setInputValue("");
        }
    }

    return(
        <div>
            <h2>React.memo</h2>
            <input className="skill-input" type="text" onChange={(e) => setInputValue(e.target.value)} value={inputValue}></input>
            <button className="skill-btn" onClick={hadleChange}>Add Skill</button>
            <ul>
                {
                    list.length > 0 &&
                    list.map(item => (
                        <li className="item-jumbotron">{item}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Memo

// {"body": "() => {\n    cy.get('#skill-input').type('jumbotron');\n    cy.get('#skill-btn').click();\n    
// cy.get('#item-jumbotron').should('exist');\n    cy.get('#item-jumbotron').should('contain.text', 'jumbotron');\n  },
//     {"displayError": "AssertionError: Timed out retrying after 4000ms: Expected to find element: `#skill-input`, but never found it.\n
//         at Context.eval (http://localhost:8080/__cypress/tests?p=cypress/integration/tests/test.spec.js:127:8)"}