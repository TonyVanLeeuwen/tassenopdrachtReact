import React from 'react';

function tile({title, children, img, alt}) {
    if (children) {
        return (
            <section>
                <h2>{title}</h2>
                {children}
            </section>
        );
    } else {
        return (
            <section>
                <img src={img} alt={alt}/>
            </section>
        );
    }

}

export default tile;