import React from 'react';
import './App.css';
import Button from "./Button";
import Bag from "./Bag";
import bag1 from './assets/bag_1.png'
import bag2 from './assets/bag_2.png'
import bag3 from './assets/bag_3.png'
import bag4 from './assets/bag_4.png'

function App() {
    return (
        <>
            <h1>Handbags & Purses</h1>
            <nav>
                <Button buttontext="to the collection"/>
                <Button buttontext="shop all bag"/>
                <Button buttontext="pre-orders"/>
            </nav>

            <main>
                <Bag/>
                <article>
                    <span>Best seller</span>
                    <img src={bag2}  alt="bruine tas"/>
                    <p>The stylish bag</p> <h4>€250,-</h4>
                </article>
                <article>
                    <span>Best seller</span>
                    <img src={bag3}  alt="grijze tas"/>
                    <p>The simple bag</p> <h4>€300,-</h4>
                </article>
                <article>
                    <span>Best seller</span>
                    <img src={bag4}  alt="gouden tas"/>
                    <p>The trendy bag</p>
                    <h4>€150,-</h4>
                </article>
            </main>
        </>
    );
}

export default App;



