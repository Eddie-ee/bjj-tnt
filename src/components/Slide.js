import React from "react"
import ReactDOM from "react-dom/client"
import {tricksArray} from "./tricksData"

export default function Slide() {

    function getRandomTrick() {
        let randomnum = Math.floor(Math.random() * tricksArray.length) + 1
        let randomTrick = tricksArray[randomnum]
        return randomTrick
    }

    return (
        <div className="slide-div">
            <h2>Slide component</h2>
            <p>{getRandomTrick()}</p>
        </div>
    )
}




// do ONE, SMALL thing.