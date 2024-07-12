import React, {useState} from "react";
import StateProps from "./StateProps";
import "./State.css"

function State(){
    const [name, setName] = useState('my friend')
    const [color, setColor] =useState()
    return (
        <>
            <h1>Here is an example of State and passing Props</h1>
            <StateProps name={name} setPropsName={setName}/>
        </>
    );
}

export default State;