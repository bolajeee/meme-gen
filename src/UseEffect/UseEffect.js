
import React from "react"

export default function UseEffect() {
    const [starWarsData, setStarWarsData] = React.useState({})
    const [count, setCount] = React.useState(1)
    
    console.log("Component rendered")
    
    React.useEffect(() => {
        console.log("effect used")
        fetch(`https://swapi.dev/api/people/${count}`)
            .then(res => res.json())
        .then(data => setStarWarsData(data))
    },[count])

    return (
        <div>
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
            <h2>The count is {count}</h2>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Add</button>
        </div>
    )
}


