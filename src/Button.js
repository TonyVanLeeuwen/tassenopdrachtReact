import React from 'react';

function Button({buttontext, disabled}){
    if (disabled){ return (
        <button disabled={true} onClick={()=> console.log(buttontext)}> {buttontext} </button>
    )
    } else {
        return(
            <button onClick={()=> console.log(buttontext)}> {buttontext} </button>
        )
    }
}

export default Button;

