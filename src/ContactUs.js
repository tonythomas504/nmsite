import React from 'react'
import team from './team.jpg'
import './ContactUs.css'

const ContactUs = () => {
    return (

        <div className="contact">

            <img src={team} alt="" />
            <div className="contact_text">
                <h1>Contact Us</h1>
                <div className="contact_paragraph">
                    <p>We look forward to continue providing opportunities to African-American and Black students who attend DePauw University, Marian Univerisity, IUPUI and University of Indianapolis. If you have any questions about our LEAD program please contact us at <a href="mailto:lead@nm.com">lead@nm.com</a> we'd love to hear from you!</p>
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
