import React from 'react';
import '../../styles/components/Home.css';



const Home = () => {
    let picture = require('../../assets/FrontpagePicture.jpg')

    return (
        <div className="Home">
        <img src={picture} width="100%" height="80%" ></img>
        </div>
    )

}
    


export default Home;