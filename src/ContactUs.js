import React from 'react'
import team from './team.jpg'
import './ContactUs.css'

const ContactUs = () => {
    return (

        <div className="contact">

            <img src={team} alt="" />
            <div className="contact_text">
                <h1>How To apply</h1>
                <div className="contact_paragraph">
                    <p>The application process opens on March 1st, 2021 and runs through May 1st, 2021. Interested applicants should send resumes to <a href="mailto:lead@nm.com">lead@nm.com</a>and include a 250-word(max) response to the question “Why is this program important to you”.</p>
                </div>
            </div>


        </div>
        // <div className="contact_us">
        //     <h1>Contact Us</h1>
        //     <img
        //         className="contact_image"
        //         src={team} alt="" />
        //     <p>We look forward to continue providing opportunities to African-American and Black students who attend DePauw University, Marian Univerisity, IUPUI and University of Indianapolis. If you have any questions about our LEAD program please contact us at lead@nm.com we'd love to hear from you!</p>
        // </div>
    )

}

export default ContactUs
