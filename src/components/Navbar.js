import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import logo from "../image/goodspace.png"
import logo1 from "../image/good.png";
//import SelectSearch from 'react-select-search';
import feedback from "../image/web-browser.png";
import logo3 from "../image/partnership.png";
import logo4 from "../image/chat.png";
import premium from "../image/premium.png";
import notification from "../image/bell.png"
import "./navbar.css";



const Navbar = () => {
    return (
      
 <nav className="navbar">
  <div className="container-fluid">
    <a className="navbars-brand" href="#">
      <img src={logo} alt="" width="24" height="35" />
    </a>
    <a className="navbar-brand" href="#">
      <img src={logo1} alt="" width="120" height="30" />
    </a>
    <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-expanded="false" aria-label="Search" />
        
      </form>
    <a className="navbar-brand" href="#">
      <img src={feedback} alt="" width="35" />
      <p className="p">Feedback</p>
    </a>
    <a className="navbar-brand" href="#">
      <img src={logo3} alt="" width="35" />
      <p className="p1">Hire</p>
    </a>
    <a className="navbar-brand" href="#">
      <img src={premium} alt="" width="35" />
      <p className="p2">Try Premium</p>
    </a>
    <a className="navbar-brand" href="#">
      <img src={notification} alt="" width="30" />
      <p className="p3">Notification</p>
    </a>
    <a className="navbar-brand" href="#">
      <img src={logo4} alt="" width="30" />
      <p className="p4">Message</p>
    </a>

        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw2qISR9dOvTG1YcGGUn8QZb3lgbXdKYkrMg&usqp=CAU"  className="image2" alt="" height="60px" width="60px" border-radius= "50px" />
    
  </div>
</nav>
    )
}

export default Navbar
