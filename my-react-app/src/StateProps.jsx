import React from "react";

const nameArr=['Any', 'Monika', 'Daniel', 'No name'];
let i=0;

function changeName(f)
{
    console.log(nameArr[i++]);
    return f(nameArr[i++])
}
function StateProps({name, setPropsName}){
    
    return (
        <>
            <h2>This is state props</h2>
            <h2>Hello, {name}</h2>
            <button onClick={()=> setPropsName('Monika')}>Change Name</button>
            <button onClick= {changeName(setPropsName)}>Change Name Randomly</button>
        </>
    );
}

export default StateProps;