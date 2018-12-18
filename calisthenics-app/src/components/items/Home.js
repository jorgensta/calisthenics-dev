import React from 'react';
import '../../styles/components/items/Home.css';
import Zoom from 'react-reveal/Zoom';
import picture from '../../assets/FrontpagePicture.jpg';


const Home = () => {
  return (
        <div className="Home">
        <div className="homeTextDiv">
        <Zoom>
        <p className="frontText">Formed in 2015, NTNUI Calisthenics has grown
        into a extraordinary group with enthusiasm, strength and companionship
        from a tremendous disparate group of students. We are currently
        Norways largest calisthenics community. The group is composed of
        circus artistists, tricking dudes, gymnastics and raw calisthenics strength.
        </p>

        <a href="https://docs.google.com/forms/d/18Juyj22opQFylISBQYKHBxOd4HtJR-gquAKkr5k35h4/" target="_blank" className="applyButton">Apply now</a>
        </Zoom>
        </div>
        <Zoom>
            <img className="frontPic" alt="Forsidebilde Calisthenics"src={picture}></img>
        </Zoom>

        </div>
    )}
export default Home;
