import React from 'react';
import '../styles/components/Footer.css'
import { SocialIcon } from 'react-social-icons';

const Footer = ()  => (
    <div className="Footer">
        <div className="IconNavBar">
            <SocialIcon className="Icon" url="https://www.facebook.com/ntnuicalisthenics/?ref=bookmarks"/>
            <SocialIcon className="Icon" url="https://www.instagram.com/ntnuicalisthenics/?hl=en" />
            <SocialIcon className="Icon" url="mailto:calisthenics-leder@ntnui.no" />
        </div>
    </div>
)

export default Footer;

