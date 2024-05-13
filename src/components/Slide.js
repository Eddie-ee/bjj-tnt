
import React, { useState } from "react";
import Button from './Button';

const testArray = [
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
        const randomIndex = Math.floor(Math.random() * testArray.length);
        setRandomTip(testArray[randomIndex]);
    }

    return (
        <div className="slide-div">
            <Button clickProp={handleClick} />
            <h2>Slide component</h2>
            <p id="slide-el">{randomTip}</p>
        </div>
    );
}


