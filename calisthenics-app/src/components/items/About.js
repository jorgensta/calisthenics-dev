import React from 'react';

import BoardMemberItem from './about/BoardMemberItem';
import '../../styles/components/items/About.css';
import {boardMembers} from '../../assets/boardMembers/boardMembers';


import Fade from 'react-reveal/Fade';

const About = () => (
    <div className="About">
    <Fade big>
    {boardMembers.map((member, index) => (
        <BoardMemberItem key={index} member={member} />
    ))}
    </Fade>
    </div>
)

export default About;
