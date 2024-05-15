import React from 'react';

export default function Button({ onClick }) {
    return (
        <div id="div--button">
            <button onClick={onClick} >NEW TIP</button>
        </div>
    );
}