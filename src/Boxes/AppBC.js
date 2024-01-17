import React from "react"
import boxData from "./boxDataSet"
import Box from "./Box"

export default function AppBC(props) {
    
    const [boxArray, setBoxArray] = React.useState(boxData)

 
    const aBox = boxArray.map(box => {
        return <Box key={box.id} on={box.on} />
    })

    return (
        <main>
            <h1>Boxes will go here</h1>
                {aBox }
        </main>
    )
}
