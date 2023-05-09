import React from "react";

function IdCard({lastName, firstName, gender, height, birth, picture}){

    return (
        <div id="container">
            <img src={picture} alt="John"/>
        <div id="sub-container">
            <p><strong>First Name: </strong>{firstName}</p>
            <p><strong>Last Name: </strong>{lastName}</p>
            <p><strong>Gender: </strong>{gender}</p>
            <p><strong>Height: </strong>{height / 100}m</p>
            <p><strong>Birth: </strong>{birth.toDateString()}</p>
        </div> 
        </div>
);
}

export default IdCard;