import React from "react";

function NavBar() {
    return(
        <div className="flex py-4 pl-2 bg-[#191919] w-full border-solid border-black">
            <div className="">
                <img className="h-16" src="Halal_logo.svg.png" alt="Halal Logo"/>
            </div>
            <ul className="flex text-white m-auto flex-row ml-100 space-x-4">
                <li><a>Home</a></li>
                <li><a>About Us</a></li>
                <li><a>Services</a></li>
                <li><a>Contacts</a></li>
            </ul>
        </div>
    )
}

export default NavBar;