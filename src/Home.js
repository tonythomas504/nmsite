import React from 'react'
import lead from './lead.png'
import './Home.css'

const Home = () => {
    return (
        <div className="home">

            <img src={lead} alt="" />
            <div className="home_text">
                <h1>LEAD with NM</h1>
                <div className="home_paragraph">
                    <p>Our Leading Excellence and Amplifying Diversity(LEAD) Scholarship Program is committed to providing African-American or Black students of any grade level the skills they need to actively pursue their dreams.</p>

                    <p>Any student who attends DePauw Univeristy, Marian University, IUPUI, or University of Indianapolis can apply. Two students will be chosen from each school to complete a nine-month leadership development program and receive a $2,500 grant.</p>
                </div>
            </div>


        </div>
    )
}

export default Home
