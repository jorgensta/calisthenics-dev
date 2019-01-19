import React from 'react';
import '../../styles/components/items/Instagram.css';



const InstagramItem = (props) => (
    <div className="pictureContainer">
        <a href={props.link}>
            <img src={props.src}></img>
        </a>
    </div>
)


export default InstagramItem;