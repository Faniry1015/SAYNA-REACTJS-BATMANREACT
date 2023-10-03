import { React, Component } from 'react'
import { NavLink } from 'react-router-dom'
import logoHome from "../assets/logo/logohome.png"
import "../styles/Header.css";
import { UserAuth } from '../context/AuthContext';

function Header() {
    const { user } = UserAuth()
    return (
        <header className="header">
            <div className="header">
                <div className="header__divLogo">
                    <NavLink to="/"><img src={logoHome} alt="Logo Batman Home" className="header__logo"
                        title="HOME" />
                    </NavLink>
                </div>
                <nav>
                    <ul>
                        <li><NavLink to="/">Home</NavLink> </li>
                        <li><NavLink to="game">Game</NavLink></li>
                        <li><NavLink to="eshop">E-Shop</NavLink> </li>
                        {user ? <li><NavLink to="compte">Mon compte</NavLink></li> : <div>
                            <NavLink to="login"><button className='ms-2 btnContain__btn navBarBtn'>Connection</button></NavLink>
                            <NavLink to="signup"><button className='ms-2 btnContain__btn navBarBtn'>S'inscrire</button></NavLink>
                        </div>}
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header