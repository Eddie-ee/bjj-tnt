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





function getRandomCard() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
    let randomNum = Math.floor(Math.random() * numbers.length) + 1
    return randomNum
}