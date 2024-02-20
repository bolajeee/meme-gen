import React from "react"
import "./Csostyles.css"


export default function CmlpxStateObj() {
    
    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (719) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: true
    })

    /**
     * Challenge: Fill in the values in the markup
     * using the properties of our state object above
     * (Ignore `isFavorite` for now)
     */
    
    function toggleFavorite() {
        setContact(newContact => {
            return {
                ...newContact,
                isFavorite: !newContact.isFavorite
            }
        })
    }
    
    return (
        <main>
            <article className="card">
                <img src="../images/profile.jpg" className="card--image" />
                    <div className="card--info">
                    <img 
                        src={contact.isFavorite? "../images/star-filled.svg" : "../images/star-empty.svg"} 
                        className="card--favorite"
                        onClick={toggleFavorite}
                    />
                    <h2 className="card--name">
                        {contact.firstName} {contact.lastName}
                    </h2>
                    <p className="card--contact">{contact.phone}</p>
                    <p className="card--contact">{contact.email}</p>
                </div>
                
            </article>
        </main>
    )
}
