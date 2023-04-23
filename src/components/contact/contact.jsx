import React, { useState } from "react";
import './contact.css';

const Contact = () => {
    const [error, setError] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault();
        setError(true);
    }

    return (
        <div>
        <div className="d-flex flex-column align-items-center text-center text-light mt-4">
            <h2>CONTACT ME</h2>
            <h5 className="mt-2">Fill the next form leaving your contact data and a message. &#9996;</h5>
        </div>
        <div class="container">
            <form onSubmit={handleSubmit} className="needs-validation" novalidate>
                <div class="mb-3">
                    <label for="nameInput" className="form-label">Name and lastname (Mandatory):</label>
                    <input type="text" className="form-control" id="FormControlInput1" placeholder="Insert your name here..." required />
                </div>
                <div class="mb-3">
                    <label for="emailInput" className="form-label">Email address (Mandatory):</label>
                    <input type="email" className="form-control" id="FormControlInput1" placeholder="name@example.com" required />
                </div>
                <div class="mb-3">
                    <label for="messageInput" className="form-label">Message (Mandatory):</label>
                    <textarea className="form-control" id="FormControlTextarea1" rows="5" placeholder="Write a message here, leave contact info if you want..." required></textarea>
                </div>
                <button type="submit" className="btn btn-outline-primary">Submit</button>
                {error && <p className="text-dark text-center m-2">Thanks! I'll send you a message as soon as posible &#9786;</p>}
            </form>
        </div>
    </div>
    )
}

export default Contact