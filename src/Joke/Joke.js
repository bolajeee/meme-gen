import React from "react"
import jokeData from "./jokeData"

export default function Joke(props) {
    /**
     * Challenge:
     * - Create state `isShown` (boolean, default to `false`)
     * - Add a button that toggles the value back and forth
     */
    
    const [isShown, setIsShown] = React.useState(false)

    function toggle() {
        setIsShown(prevIsShown => {
            return prevIsShown = !prevIsShown
        })

       }

    return (
        <div>
            {props.setup && <h3>{props.setup}</h3>}
            <p>{props.punchline}</p>
            <button className="btn" onClick={toggle}>Show</button>
            <hr />
        </div>
    )
}