import React,{Component} from 'react';
import '../styles/components/NavBar.css';
import {NavLink} from 'react-router-dom';


const NavBar = () => (
    <div className="NavBar">
        <NavLink className="navlink" to="/">Home</NavLink>
        <NavLink className="navlink" to="/about">About us</NavLink>
        <NavLink className="navlink" to="/training">Our Training</NavLink>
        <NavLink className="navlink" to="/instagram">Instagram</NavLink>
        <NavLink className="navlink" to="/contact">Contact us</NavLink>
        <NavLink className="navlink" to="/faq">F.A.Q.</NavLink>
        
    </div>
)


export default NavBar;