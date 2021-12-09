import React from 'react'
import "./navbar.css";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BiHelpCircle } from "react-icons/bi";
import { IoMdChatboxes, IoMdNotificationsOutline} from "react-icons/io";

const Navbar = () => {
    return (
        <div className = "navbar">
            <div className="brandlogo">
                <img src="/images/brandlogo.jpg" alt="brandlogo" className="brandLogoPic" />
            </div>
            <div className="menu">
                <ul className="menuList">
                    <li className="menuListItem"><a href="#d" className="menuLink">Dashboard</a></li>
                    <li className="menuListItem"><a href="#d" className="menuLink">Priority Hours</a></li>
                    <li className="menuListItem"><a href="#d" className="menuLink">Reservations</a></li>
                    <li className="menuListItem"><a href="#d" className="menuLink">Library</a></li>
                    <li className="menuListItem"><a href="#d" className="menuLink">History</a></li>
                </ul>    

            </div>
            <div className="menuIcons">
                <div className="menuIcon"><BsFillTelephoneFill/></div>
                <div className="menuIcon"><IoMdChatboxes/></div>
                <div className="menuIcon"><IoMdNotificationsOutline/></div>
                <div className="menuIcon"><BiHelpCircle/></div>
                <div className="menuIcon"><img src="/images/nick-huizinga-pE-VMUCDfA0-unsplash.jpg" alt="" className="menuPic" /></div>

            </div>
        </div>
    )
}

export default Navbar
