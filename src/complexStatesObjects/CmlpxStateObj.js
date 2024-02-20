import React from "react"
import "./Csostyles.css"
import Star from "./Star"


export default function CmlpxStateObj() {
    
    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (719) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: true
    })

 
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
                <img src="../CSOimages/profile.jpg" className="card--image" />
                    <div className="card--info">
                    <Star
                        isFilled={contact.isFavorite ? "../CSOimages/star-filled.svg" : "../CSOimages/star-empty.svg"}
                        handleToggleFavorite= {toggleFavorite}
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
