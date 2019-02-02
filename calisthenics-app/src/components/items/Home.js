import React from 'react';
import '../../styles/components/items/Home.css';
import Zoom from 'react-reveal/Zoom';
import picture from '../../assets/FrontpagePicture.jpg';


const Home = () => {
  return (
        <div className="Home">
            <div className="homeTextDiv">
            <Zoom>
            {/*<p className="frontText">Formed in 2015, NTNUI Calisthenics has grown
            into a extraordinary group with enthusiasm, strength and companionship
            from a tremendous disparate group of students. We are currently
            Norways largest calisthenics community. The group is composed of
            circus artistists, tricking dudes, gymnastics and raw calisthenics strength.
            </p>
            */}
            <div>
                <a href="https://docs.google.com/forms/d/18Juyj22opQFylISBQYKHBxOd4HtJR-gquAKkr5k35h4/" target="_blank" className="applyButton">Apply now!</a>
            </div>
            </Zoom>
            </div>

            {/* <Zoom>
                <img className="frontPic" alt="Forsidebilde Calisthenics"src={picture}></img>
            </Zoom>
            */}

            <Zoom>
            <div className="scheduleDivContainer">
              <div className="scheduleDiv">
                <div className="scheduleHeader">Training hours</div>
                {/*<div className="scheduleTraining"><span className="boldFont">Tuesday</span> 18:30-19:55 Armfeldtsalen</div> */}
                <div className="scheduleTraining"><span className="boldFont">Friday</span> 19:00-21:00 Gymfit</div>
                <div className="scheduleTraining"><span className="boldFont">Sunday</span> 19:00-21:00 Gymfit</div>
              </div>
            </div>
            </Zoom>

        </div>
    )}
export default Home;
