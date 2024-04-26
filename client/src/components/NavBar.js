import React from "react";
import ReactDOM from "react-dom/client";
import { Link } from "react-router-dom";

function NavBar() {
    return(
        <div className="flex py-4 pl-2 bg-[#191919] w-full border-solid border-black">
            <div className="">
                <img className="h-16" src="media/Halal_logo.svg.png" alt="Halal Logo"/>
            </div>
            <ul className="flex text-white m-auto flex-row ml-100 space-x-4">
                <li><Link to="/" >Home</Link></li>
                <li><Link to="/about" >About Us</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/contact">Contacts</Link></li>
            </ul>
        </div>
    )
}

export default NavBar;