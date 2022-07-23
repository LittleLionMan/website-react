import './header.css';
import twitter from '../../ressources/Twitter_Logo_WhiteOnBlue.png';
import mail from '../../ressources/istockphoto-1190775238-170667a.jpeg';
import { NavLink } from 'react-router-dom';
import React, { useState, useRef } from "react";

export default function Header () {
    const catMenu = useRef(null);
    const [openMenu, setOpenMenu] = useState(false);

    const miniNav = () => {
        if (!openMenu) {
            setOpenMenu(true)
        } else {
            setOpenMenu(false);
        }
    }
    const closeOpenMenus = (e)=>{
        const menu = document.getElementById('nav-klein');
        if(catMenu.current && openMenu && !catMenu.current.contains(e.target) && !menu.contains(e.target)){
          setOpenMenu(false);
          document.removeEventListener('mousedown',closeOpenMenus);
          
        }
        
    }

    if (openMenu) {
        document.addEventListener('mousedown',closeOpenMenus);
        
    } 

    return (
        <header>
        <div id="header-top">
                <div id="social">
                    <ul>
                        <li>
                            <a href='https://twitter.com/hoho_yo'><img src={twitter} alt='TwitterLogo' className="social" /></a>
                        </li>
                        <li>
                            <a href="mailto:sibnie@web.de"><img src={mail} alt='MailLogo' className="social" /></a>
                        </li>
                    </ul>
                </div>
                <div id="nav">
                    <ul>
                        <li><NavLink 
                                className={({isActive}) => "navE" + (isActive ? " nav-active" : "")} 
                                to="/"
                            >
                                Start
                            </NavLink></li>
                        <li><NavLink 
                                className={({isActive}) => "navE" + (isActive ? " nav-active" : "")}
                                end to="/archiv"
                            >
                                Archiv
                            </NavLink></li>
                        <li><NavLink 
                                className={({isActive}) => "navE" + (isActive ? " nav-active" : "")} 
                                to="/sinnloses"
                            >
                                Sinnloses
                            </NavLink></li>
                    </ul>
                </div>
                <div id="nav-klein" onClick={miniNav}>
                    <p>&equiv;</p>
                </div>
                
            
            <div id="nav-menu" ref={catMenu} style={openMenu ? {display: 'block'} : {display: 'none'}}>
                <ul>
                    <li><button><NavLink 
                                    className={({isActive}) => "navEK" + (isActive ? " nav-activeK" : "")}
                                    to="/"
                                >
                                    Start
                                </NavLink></button></li>
                    <li><button><NavLink 
                                    className={({isActive}) => "navEK" + (isActive ? " nav-activeK" : "")}
                                    end to="/archiv"
                                    >
                                        Archiv
                                    </NavLink></button></li>
                    <li><button><NavLink 
                                    className={({isActive}) => "navEK" + (isActive ? " nav-activeK" : "")} 
                                    to="/sinnloses"
                                >
                                    Sinnloses
                                </NavLink></button></li>
                </ul>
            </div>
        </div>
        <div id="header">
            <p></p>
        </div>
        </header>
    )
}
