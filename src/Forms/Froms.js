import React from "react";

export default function Forms() {
    const [formInfo, setFromInfo] = React.useState({
        firstname: "",
        lastname: "",
        Email: "",
        comments: "",
        favColor:""
    })
    

    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setFromInfo(prevFromInfo => {
            return ({
                ...prevFromInfo,
                [name]: type === "checkbox"? checked : value
            })
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
    }

    return (
        <form onSubmit={handleSubmit}>
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


            <input
                type="radio"
                name="employment"
                id="unemployed"
                onChange={handleChange}
                value="Unemployed"
                checked={formInfo.employed === "Unemployed"}

            />

            <label htmlFor="unemployed">Unemployed</label>
            
            <input
                type="radio"
                name="employment"
                id="employed"
                onChange={handleChange}
                value="employed"
                checked={formInfo.employed === "employed"}
            />

            <label htmlFor="employed">Employed</label>
            
            <input
                type="radio"
                name="employment"
                id="student"
                onChange={handleChange}
                value="student"
                checked={formInfo.employed === "student"}

            />

            <label htmlFor="student">Student</label>

            <select
                id="favColor"
                value={formInfo.favColor}
                name="favColor"
                onChange={handleChange}
            >

            <option value="">--Choose--</option>
            <option value="red">Red</option>
            <option value="blue">Blue</option>
            <option value="green">Green</option>
            <option value="purple">Purple</option>
            <option value="violet">Violet</option>
                
            </select>

            <button>Submit</button>
        </form>
    )

}