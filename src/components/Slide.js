import React, { useState } from "react";
import Button from './Button';
import Move from './Move';
import { tipData } from './tipData';

export default function Slide() {
    const [randomTip, setRandomTip] = useState({ name: 'Slap and bump!', description: 'Initial tip description' });

    function handleClick() {
        const randomIndex = Math.floor(Math.random() * tipData.length);
        setRandomTip(tipData[randomIndex]);
    }

    return (
        <div className="slide-div">
            <Button onClick={handleClick} />
            
            <Move 
                area={randomTip.name} 
                tip={randomTip.description} 
                level={randomTip.level}

                />
            
        </div>
    );
}