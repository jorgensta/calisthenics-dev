import React, {useState} from 'react';
import SwipeableViews from 'react-swipeable-views';
import { bindKeyboard, autoPlay} from 'react-swipeable-views-utils';
import flowRight from 'lodash/flowRight';
import Dots from 'react-carousel-dots';

import Apply from './Home/Apply';
import Schedule from './Home/Schedule';
import Trip from './Home/Trip';
import Workshops from './Home/Workshops';

import '../../styles/components/items/Home.css';

const KeyBoard = flowRight(
  bindKeyboard,
  autoPlay,
)(SwipeableViews);

const Home = () => {

  const [index, setIndex] = useState(0);

  return (
    <div className="Home">
      <KeyBoard
        className="keyboard"
        interval={5000}
        onChangeIndex={(index) =>{
          setIndex(index);
      }}>
        <Apply />
        <Schedule />
        <Trip />
        <Workshops />
      </KeyBoard>
      <Dots
        className="Dots"
        length={4}
        active={index}
        size={20}
      />
  </div>
    )
  };

export default Home;
