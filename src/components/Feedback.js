import React from 'react';
import "./feedback.css";
import logogirl from "../image/feedback.png";

const Feedback = () => {
    return (
        <nav className="navbars">
          <div className="container">
            <h5 className="give_feedback">Give Feedback to <span className="Binay">Binay Pratap Singh</span></h5>
            
         </div>
         <div className="feedback_body">
             <div className="feedback_one-side">
             <h5 className="feedback_confi">Your Feedback is <span className="confidential">Confidential</span></h5>
             <p className="your_feedback">Your feedback will be anonymous and it won't be shared with anyone</p>
             <button className="btn">Okay</button>
             </div>
             <div className="feedback_second-side">
         <div className="feedback_image">
         <img src={logogirl} className="feedback_pic" alt="" width="100px" height="70px" />
         </div>
         </div>
        
         </div>
        </nav>
    )
}

export default Feedback
