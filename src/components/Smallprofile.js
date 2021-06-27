import React from 'react';
import './smallprofile.css';
import logopremium from "../image/premium.png";
import logocheck from "../image/check.png";

const Profile = () => {
    return (
        <div className="container">
            <div className="card">
                    <div className="image-container">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw2qISR9dOvTG1YcGGUn8QZb3lgbXdKYkrMg&usqp=CAU"  className="image1" alt="" height="70px" width="70px" border-radius= "50px" />
                    </div>
                <div className="lower-container2">
                    <h3 className="name1">John L Glenn</h3>
                    <h7 className="para"> 26, New Delhi</h7>
                    <ul><li className="list1"><p className="Available">Available immediately</p></li></ul>
                    <hr className="divider"/>
                    <h6 className="skills">Skills</h6>
                    <div className="language">
                    <p className="python1">Python</p>
                    <p className="javaScript1">JavaScript</p>
                    <p className="Java1">Java</p>
                    </div>
                    <h7 className="typeofworks">Type of work   </h7>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16">
                       <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                       <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
                    </svg>
                    <p className="works">work from home</p>
                    <h7 className="compensations">Compensation</h7>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cash-coin" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M11 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm5-4a5 5 0 1 1-10 0 5 5 0 0 1 10 0z"/>
                      <path d="M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207 0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158 0 .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522 0-.294.216-.514.572-.578v1.1h-.003zm.432.746c.449.104.655.272.655.569 0 .339-.257.571-.709.614v-1.195l.054.012z"/>
                      <path d="M1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.083c.058-.344.145-.678.258-1H3a2 2 0 0 0-2-2V3a2 2 0 0 0 2-2h10a2 2 0 0 0 2 2v3.528c.38.34.717.728 1 1.154V1a1 1 0 0 0-1-1H1z"/>
                      <path d="M9.998 5.083 10 5a2 2 0 1 0-3.132 1.65 5.982 5.982 0 0 1 3.13-1.567z"/>
                    </svg>
                    <p className="permonth">Per Month<span className="rupee">₹25k - 50k</span></p>
                    <p className="perhour">Per Hour<span className="rupees">₹200 - 300</span></p>
                </div>
            </div>
            <div className="premium">
                <h6 className="premium_logo1">
                <img src={logopremium} alt="" className="premium-logo" width="28" height="28" />
                    Try Premium Features</h6>
            </div>
            <div className="available_immediately">
                <h6>
                <img src={logocheck} alt="" className="availabe_logo"width="18" height="18" />
                    Available Immediately</h6>
            </div>
         </div>
       
    )
}

export default Profile
