import React from "react";

const Body = (props) => {
    return(
        <>
            <h2>OUPA! {props.b1}</h2>
            <p>{props.content}</p>
        </>
    );
}

export default Body