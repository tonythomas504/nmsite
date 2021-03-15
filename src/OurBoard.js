import React from 'react'
import david from './david.jpg'
import kenyata from './kenyata.jpg'
import matthew from './matthew.jpg'
import './Ourboard.css'

const OurBoard = () => {
    return (
        <div className="head">
            <h1 className="header">Our Board</h1>
       <div className="ourboard">
            <div className="david">
                <img
                    className="image"
                    src={david} alt="" />
                <h3>David Hamilton</h3>
                <p>David is an Indianapolis, Indiana native with strong roots in the community. After graduating from Harvard Law School, David began working as a Corporate Finance attorney. David then began a career as an NBA Certified Agent where he helped numerous clients achieve their lifelong dreams. During his time as an attorney and agent, David developed a passion for helping his clients accumulate and protect wealth which led him to become a financial representative. During his time in this career, David has built a highly relational practice centered on helping others plan their financial future. In his spare time, David enjoys coaching basketball on the weekends and spending time with his family.  </p>
            </div><div className="kenyata">
                <img
                    className="image"
                    src={kenyata} alt="" />
                <h3>Kenyata Moore</h3>
                <p>Kenyata Moore is a wife and mother of 4 beautiful children. She lives by three main core values God, family, and service of others.  She dedicated to her craft and is always willing to go above and beyond to provide quality service to the families she represents. She is truly your financial advocate and will fight for you and your family’s best interest! Kenyata is honorable, loving, and determined to make financial planning accessible to all. 

                While Kenyata Moore is new to the world of financial planning, after finishing an amazing career with the United States Navy, this Navy Chief is far from green. You’ll come to realize that she’s probably one of the most-humble, sweet, kindhearted people you’ll ever know.
                
                Even to this day she continues to honor the brave women and men she served alongside with in the United States Navy.Kenyata has decided to continue with her service just with a new mission…helping to protect you and your family's financial future.</p>
            </div><div className="matthew">
                <img
                    className="image"
                    src={matthew} alt="" />
                <h3>Matthew Bennett</h3>
                <p>Matthew is a husband and a father of two kids. Born and raised in Indianapolis, he’s always had a passion for helping others through sports and community involvement. After a long stint in software sales, he shifted his focus to build his financial practice with Northwestern Mutual in 2020. After reading countless books, the passion for financial literacy was sparked in him. Matthew prides himself on being a comprehensive financial planner, ensuring his clients are not only building lasting wealth, but preserving their wealth as well. He firmly believes that generational wealth is created not only in the passing of assets, but also in the knowledge transfer. In his spare time, Matthew enjoys spending his time with family, playing and watching sports.</p>
            </div></div></div>
    )
}

export default OurBoard
