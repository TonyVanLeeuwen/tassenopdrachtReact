import React from 'react';

function tile({title, text, amountOfText, img, alt}) {
    if (amountOfText === 2) {
        return (
            <section>
                <h2>{title}</h2>
                <p>{text}</p>
                <p>{text}</p>
            </section>
        );
    } else if (amountOfText < 2) {
        return (
            <section>
                <h2>{title}</h2>
                <p>{text}</p>
            </section>
        );
    } else {
        return (
            <section>
                <img src={img} alt={alt}/>
            </section>
        );
    }
    ;
}

export default tile;