import React from "react";

function ClickEvent(){

    const handleClick=(e)=>{
        console.log(e + "\nHello world")
        document.getElementById('show').innerText = "\nHello world";
    }

    return (
        <>
            <button onClick={handleClick}>Click Me</button>
            <p id ='show'></p>
        </>
    )
}

export default ClickEvent;
