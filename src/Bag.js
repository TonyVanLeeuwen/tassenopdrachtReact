import React from 'react';
import bag1 from "./assets/bag_1.png";

function bag ({}){
    return (
        <article><span>Best seller</span>
            <img src={bag1} alt="roze tas"/>
            <p>The handy bag</p>
            <h4>`€ ${},-`</h4>
        </article>
        )
}



export default bag;