import React from "react";

export default function Move(props) {
    return (
        <div>
            <h3>{props.area}</h3>
            <h4>{props.level} belt</h4>
                <div className="par--div">
                    <p>{props.tip}</p>
                </div>
        </div>
    );
}