import React, {Component} from 'react';
import NavBar from './NavBar';
import '../styles/components/Header.css';



const Header = (props)  => (
    <div className="Header">
        <img className="img-header" src={props.picture} height="100" width="125"></img>
        <NavBar />
    </div>
)

export default Header;