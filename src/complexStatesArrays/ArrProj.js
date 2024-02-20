import React from 'react';
import ReactDOM from 'react-dom';

export default function Arrays() {
    /**
     * Challenge: Convert the code below to use an array
     * held in state instead of a local variable. Initialize 
     * the state array with the same 2 items below
     * 
     * Don't worry about fixing `addItem` quite yet.
     */
    const  [thingsArray, setThingArray] = React.useState(["Thing 1", "Thing 2", "Thing 3"])
    
    function addItem() {
        const newItem = setThingArray(newThingsArr => {
            return [
                ...newThingsArr,
                `Thing ${newThingsArr.length + 1}`
            ]
        })
    }
    
    const thingsElements = thingsArray.map(thing => {
        return <p key={thing}>{thing}</p>
    })
    
    return (
        <div>
            <button onClick={addItem}>Add Item</button>
            {thingsElements}
        </div>
    )
}

