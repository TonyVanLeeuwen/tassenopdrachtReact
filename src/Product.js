import React from 'react';

function product ({ spanText,image, imgAlt, bagtype, price}){
    return (
        <article><span>{spanText}</span>
            <img src={image} alt={imgAlt}/>
            <p>The {bagtype} bag</p>
            <h4>€{price},-</h4>
        </article>
        )
}



export default product;