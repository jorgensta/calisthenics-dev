import React from 'react';



const BoardMemberItem = ({member}) => (
    <div className="boardMember">
    <h1>{member.position}</h1>
    <img width="200" height="200" src='https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-9/13339535_1002433096477287_7306902061994640903_n.jpg?_nc_cat=111&_nc_ht=scontent-arn2-1.xx&oh=a7b8903fea249965f39f6d37579653c2&oe=5CF3BDC5' ></img>
    <h4>{member.firstName + ' ' + member.lastName}</h4>
    </div>
)


export default BoardMemberItem;
