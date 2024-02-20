import React from "react"
import boxData from "./boxDataSet"
import Box from "./Box"

export default function AppBC(props) {
    
    const [boxArray, setBoxArray] = React.useState(boxData)

    function toggle(id) {
        setBoxArray(prevBoxArray => {
            return prevBoxArray.map(prevBox => {
               return prevBox.id === id ? {...prevBox, on: !prevBox.on} : prevBox
           })
       })
    }

    const aBox = boxArray.map(box => {
        return <Box key={box.id} id={box.id} on={box.on} handleToggle={toggle} />
    })

    return (
        <main>
            <h1>Boxes will go here</h1>
                {aBox}
        </main>
    )
}
