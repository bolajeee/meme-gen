import react from "react"
import "./style.css"


export default function Box(props) {
    const styles = {
        backgroundColor: props.on? "#222222" : "#cccccc"
    }

    return <div style={styles} className="box" onClick={() => props.handleToggle(props.id)}>
 
    </div>
}