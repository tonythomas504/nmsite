import React from 'react'
import teams from './teams.jpg'
import './HowToApply.css'

const HowToApply = () => {
    return (

        <div className="how">

            <img src={teams} alt="" />
            <div className="how_text">
                <h1>How To apply</h1>
                <div className="how_paragraph">
                    <p>The application process opens on March 1st, 2021 and runs through May 1st, 2021. Interested applicants should send resumes to <a href="mailto:lead@nm.com">lead@nm.com</a> and include a 250-word(max) response to the question “Why is this program important to you”.</p>
                </div>
            </div>


        </div>
    )
}

export default HowToApply
