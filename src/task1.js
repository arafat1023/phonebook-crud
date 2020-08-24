// import React from "react";
import React, { useState } from 'react';

export default function Task1() {
    const [userName, setUsername] = useState(0);
    const [lastName, setLastname] = useState(0);


    const handleInput = e => {
        setLastname(0);
        setUsername(e.target.value);
        console.log(e.target.value)


    };

    const saveFactorial = (e) => {
        e.preventDefault();

        var r=1
        var n=userName
        while (n > 0)
            r *= n--;
        console.log(r)
        console.log(lastName)
        setLastname(r);

        return r;

    };





    return (
        <div>
            <h1>Factorial Calculator</h1>
            <form>
                <input type="number" onChange={handleInput}  placeholder="Enter a number..." />
                <br />
                <button onClick={(e) => {saveFactorial(e)}}>Calculate Factorial </button>
            </form>
            <h2>Factorial: {lastName}</h2>
        </div>
    );
}