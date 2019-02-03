import React from 'react';



const BoardMemberItem = ({member}) => (
    <div className="boardMember">
    <h1>{member.position}</h1>
    <img width="200" height="150" src='https://scontent-dus1-1.xx.fbcdn.net/v/t1.0-9/303644_10150842567361685_1612897999_n.jpg?_nc_cat=106&_nc_ht=scontent-dus1-1.xx&oh=0217173bd2020581edbe8a31ca38ff73&oe=5CB7C245' ></img>
    <h4>{member.firstName + ' ' + member.lastName}</h4>
    </div>
)


export default BoardMemberItem;