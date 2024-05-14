
import React, { useState } from "react";
import Button from './Button';
import Move from './Move';

const tipArray = [
    "Crossface",
    "Side Control",
    "Closed Guard",
    "Open Guard",
    "Half Guard",
    "Mount",
    "Back Mount",
    "Rear Naked Choke",
    "Single Leg Takedown",
    "Double Leg Takedown",
];

export default function Slide() {
    const [randomTip, setRandomTip] = useState('Slap and bump!');

    function handleClick() {
        const randomIndex = Math.floor(Math.random() * tipArray.length);
        setRandomTip(tipArray[randomIndex]);
    }

    return (
        <div className="slide-div">
            <Button props={handleClick} />
            <h2>Slide component</h2>
            <p id="slide-el">{randomTip}</p>
            <h2>Move</h2>
            <Move 
                area="Side Control"
                tip="Pull opponent into you with your crossface and underhook arms"
            />
            <Move 
                area="Under Top Mount"
                tip="Keep elbows close, into you front ribs"
            />
            <Move />
        </div>
    );
}


// const fruits = [
//     {
//         name: 'Apple', 
//         color: 'Red', 
//         quantity: 5 
//     },
//     { 
//         name: 'Banana', 
//         color: 'Yellow', 
//         quantity: 3 
//     },
//     { 
//         name: 'Orange', 
//         color: 'Orange', 
//         quantity: 7 
//     }
// ];