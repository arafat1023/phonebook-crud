// import React from "react";
import React, { useState } from 'react';

export default function Task1() {
    const [userValue, setUservalue] = useState(0);
    const [lastValue, setLastvalue] = useState(0);


    const handleInput = e => {
        setLastvalue(0);
        setUservalue(e.target.value);
        console.log(e.target.value)


    };

    const saveFactorial = (e) => {
        e.preventDefault();

        var r=1
        var n=userValue
        while (n > 0)
            r *= n--;
        console.log(r)
        console.log(lastValue)
        setLastvalue(r);

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
            <h2>Factorial: {lastValue}</h2>
        </div>
    );
}