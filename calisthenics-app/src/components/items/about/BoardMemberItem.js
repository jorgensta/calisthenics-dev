import React from 'react';



const BoardMemberItem = ({member}) => (
    <div className="boardMember">
    <h1>{member.position}</h1>
    <img width="200" height="150" src='https://scontent-dus1-1.xx.fbcdn.net/v/t1.0-9/13939524_10207032790442783_1146105930638870934_n.jpg?_nc_cat=105&_nc_ht=scontent-dus1-1.xx&oh=691e5a674c15fe031ac22b0ab5593c8a&oe=5CBA5B7D' ></img>
    <h4>{member.firstName + ' ' + member.lastName}</h4>
    </div>
)


export default BoardMemberItem;