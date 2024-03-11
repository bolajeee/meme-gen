import React from "react";

export default function Forms() {
    const [formInfo, setFromInfo] = React.useState({
        firstname: "",
        lastname: "",
        Email: "",
        comments: "",
       
    })
    
    console.log(formInfo)

    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setFromInfo(prevFromInfo => {
            return ({
                ...prevFromInfo,
                [name]: type === "checkbox"? checked : value
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
                value={formInfo.firstname}
            />

            <input
                type="text"
                name="lastname"
                placeholder="Last name"
                onChange={handleChange}
                value={formInfo.lastname}
            />

            <input
                type="email"
                name="email"
                placeholder="dare123@gmial.com"
                onChange={handleChange}
                value={formInfo.email}
            />
            
            <textarea
                type="text"
                name="comments"
                placeholder="Please add a comment"
                value={formInfo.comments}
                onChange={handleChange}
            />

            <input
                type="checkbox"
                name="checkbox"
                id="isFriendly"
                checked={formInfo.isFriendly}
            />
            <label htmlFor="isFriendly">Are you frinedly?</label>
        </form>
    )

}