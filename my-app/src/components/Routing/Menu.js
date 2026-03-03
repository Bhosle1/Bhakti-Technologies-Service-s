import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Menu.css';


const Menu = () => {
    const [openSubmenu, setOpenSubmenu] = useState(false);

    return (
        <nav className="navbar">
            <h1 className="logo">BRAINMINE</h1>
            <ul className="menu">
                
                <li>
                    <Link to="/Home">Home</Link>
                </li>

                <li>
                    <Link to="/About">About Us</Link>
                </li>


                <li
                    className="dropdown"
                    onMouseEnter={() => setOpenSubmenu(true)}
                    onMouseLeave={() => setOpenSubmenu(false)}
                >
                    Services ▾
                    {openSubmenu && (
                        <ul className="submenu">
                            <li>
                                <Link to="/Website-Development">Website Development</Link>
                            </li>

                            <li>
                                <Link to="/Mobile-App-Development">Mobile App Development</Link>
                            </li>

                            <li>
                                <Link to="/Software-Development">Software Development</Link>
                            </li>

                            <li>
                                <Link to="/Digital-Marketing">Digital Marketing</Link>
                            </li>

                            <li>
                                <Link to="/Ui">UIUX</Link>
                            </li>

                        </ul>
                    )}
                </li>

                <li>
                    <Link to="/Blog">Blog</Link>
                </li>

                <li>
                    <Link to="/Career">Career</Link>
                </li>

                <li>
                    <Link to="/Contact">Contact</Link>
                </li>

            </ul>
        </nav>
    );
};

export default Menu;
