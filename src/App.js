import React from 'react';
import './App.css';
import Button from "./Button";
import Bag from "./Bag";
import Tile from './Tile';
import bag1 from './assets/bag_1.png';
import bag2 from './assets/bag_2.png';
import bag3 from './assets/bag_3.png';
import bag4 from './assets/bag_4.png';
import brand from './assets/brand.png';
import story from './assets/our_story.png';

function App() {
    return (
        <>
            <h1>Handbags & Purses</h1>
            <nav>
                <Button buttontext="to the collection"/>
                <Button buttontext="shop all bag"/>
                <Button buttontext="pre-orders" disabled={true}/>
            </nav>

            <main>
                <Bag spanText="Best seller" bagtype="handy" image={bag1} imgAlt="roze tas" price={400}/>
                <Bag spanText="Best seller" bagtype="stylish" image={bag2} imgAlt="bruine tas" price={250}/>
                <Bag spanText="New collection" bagtype="simple" image={bag3} imgAlt="grijsgroene tas" price={300}/>
                <Bag spanText="New collection" bagtype="trendy" image={bag4} imgAlt="gouden tas" price={150}/>
            </main>

            <footer>
                <Tile amountOfText={2} title="the brand"
                      text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci eaque earum hic ipsam laudantium libero rerum tempora totam. Fuga, tenetur."
                />
                <Tile img={brand} alt="afbeelding van het merk"/>
                <Tile img={story} alt="twee knuffelende vrouwen"/>
                <Tile title="Our story" amountOfText={1}
                      text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor ea eaque error, excepturi facilis odio quia quisquam. Alias, quam voluptates!"/>
            </footer>
        </>
    );
}

export default App;



