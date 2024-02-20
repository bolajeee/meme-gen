import React from "react"

export default function Joke(props) {
    /**
     * Challenge:
     * - Create state `isShown` (boolean, default to `false`)
     * - Add a button that toggles the value back and forth
     */
    const [isShown, setIsShown] = React.useState(false)

    function toggleVisible() {
        setIsShown(prevIsShown => !prevIsShown)
    }

    return (
        <div>
            {props.setup && <h3>{props.setup}</h3>}
            {isShown && <p>{props.punchline}</p>}
            <button className="Btn" onClick={toggleVisible}>{isShown? "Hide Punchline" : "show Punchline"}</button>
            <hr />
        </div>
    )
}