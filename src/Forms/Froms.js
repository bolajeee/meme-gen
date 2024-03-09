import React from "react";

export default function Forms() {
    const [formInput, setFromInput] = React.useState({ firstname: "", lastname: ""})
    
    console.log(formInput)

    function handleChange(event) {
        setFromInput(prevFromInput => {
            return ({
                ...prevFromInput,
                [event.target.name]: event.target.value
            })
        })
    }

    return (
        <form>
            <input
                type="text"
                name="firstname"
                placeholder="First name"
                onChange={handleChange}
            />

            <input
                type="text"
                name="lastname"
                placeholder="Last name"
                onChange={handleChange}
            />
        </form>
    )

}