import React from "react";

const Name = (props) =>{
    return(

        <div className="name-overlay">

            <input type="text" placeholder="Search..." onChange={props.change} />

            {props.data}

        </div>

    );
};

export default Name;