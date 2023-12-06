import React from 'react'

const FormTest = () => {
    const handleSubmit = () => {
        alert("Form Submitted!!")
    }
    return (
        <div>
            <h3>Contact Form</h3>
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="fname">First Name</label>
                    <input type="text" id="fname" name="firstname" placeholder="Your name.." />

                    <label htmlFor="lname">Last Name</label>
                    <input type="text" id="lname" name="lastname" placeholder="Your last name.." />

                    <label htmlFor="country">Country</label>
                    <select id="country" name="country">
                        <option value="australia">India</option>
                        <option value="canada">Australia</option>
                        <option value="usa">USA</option>
                    </select>

                    <label htmlFor="subject">Subject</label>
                    <textarea id="subject" name="subject" placeholder="Write something.." style={{ "height": "100px" }}></textarea>

                    <input type="submit" value="Submit" />
                </form>
            </div>
        </div>
    )
}

export default FormTest