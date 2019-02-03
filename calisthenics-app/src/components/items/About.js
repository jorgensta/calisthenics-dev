import React from 'react';

import BoardMemberItem from './about/BoardMemberItem';
import '../../styles/components/items/About.css';
import {boardMembers} from '../../assets/boardMembers/boardMembers';


const About = () => (
    <div className="About">
    {boardMembers.map((member, index) => (
        <BoardMemberItem key={index} member={member} />
    ))}
    </div>
)

export default About;
