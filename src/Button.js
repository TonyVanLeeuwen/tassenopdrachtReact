import React from 'react';

function Button({buttontext}){
    return(
        <button onClick={()=> console.log(buttontext)}> {buttontext} </button>
        )
}

export default Button;

