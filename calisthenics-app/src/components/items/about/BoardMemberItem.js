import React from 'react';



const BoardMemberItem = ({member}) => (
    <div className="boardMember">
    <h1>{member.position}</h1>
    <img width="200" height="150" src='https://placekitten.com/g/300/200' ></img>
    <h4>{member.firstName + ' ' + member.lastName}</h4>
    </div>
)


export default BoardMemberItem;