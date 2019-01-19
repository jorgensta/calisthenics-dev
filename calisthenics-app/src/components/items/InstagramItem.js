import React from 'react';
import '../../styles/components/items/Instagram.css';



const InstagramItem = (props) => (
    <div className="pictureContainer">
        <img src={props.src}></img>
    </div>
)


export default InstagramItem;