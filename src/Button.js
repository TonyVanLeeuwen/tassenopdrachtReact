import React from 'react';

function Button({buttonText, disabled}){
    if (disabled){ return (
        <button disabled={true} onClick={()=> console.log(buttonText)}> {buttonText} </button>
    )
    } else {
        return(
            <button onClick={()=> console.log(buttonText)}> {buttonText} </button>
        )
    }
}

export default Button;

