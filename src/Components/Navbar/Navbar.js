import React, {useState} from 'react';
import Logo from "././Assets/db_logo.jpg"; //TODO -- FIX THIS
import {BsCart2} from "react-icons/bs";
import {HiOutlineBars3} from "react-icons/hi2";
import {Box, Drawer, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded"


const Navbar = () => {

    const [openMenu, setOpenMenu] = useState(false);
    const menuOptions = [
        {
            text: "Home",
            icon: <HomeIcon/>
        },
        {
            text: "About",
            icon: <InfoIcon/>
        },
        {
            text: "Reviews",
            icon: <CommentRoundedIcon/>
        },
        {
            text: "Contact",
            icon: <PhoneRoundedIcon/>
        },

    ]


    return (
        <nav>
            <div className="nav-logo-container">
                <img src={Logo} alt=""/>
            </div>
            <div className="navbar-links-container">
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">Reviews</a>
                <a href="">Contact</a>
                <button className="primary-button">Bookings Now</button>

            </div>

    </nav>
    )
};


export default Navbar;
