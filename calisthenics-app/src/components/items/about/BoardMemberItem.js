import React from 'react';



const BoardMemberItem = ({member}) => (
    <div className="boardMember">
    <h1>{member.position}</h1>
    <img alt="Could not load" width="200" height="200" src={member.picture} ></img>
    <h4>{member.firstName + ' ' + member.lastName}</h4>
    </div>
)


export default BoardMemberItem;
