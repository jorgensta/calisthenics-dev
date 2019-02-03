import React from 'react';
import NavBar from './NavBar';
import '../styles/components/Header.css';
import {NavLink} from 'react-router-dom';


const Header = (props)  => (
    <div className="Header">
        <NavLink to="/">
        <img className="img-header" src={props.picture} height="100" width="125"></img>
        </NavLink>
        <NavBar />
    </div>
)

export default Header;
