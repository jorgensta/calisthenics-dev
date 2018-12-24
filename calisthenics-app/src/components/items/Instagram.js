import React from 'react';
import InstagramEmbed from 'react-instagram-embed'
import Zoom from 'react-reveal/Zoom';
import '../../styles/components/items/Instagram.css';
import { type } from 'os';
const newToken = "3098531026.d6d68a3.57098e5aa962411cbe5d1333737358df"
const userID = ''

// const instafeedTarget = 'instafeed';
//   return (
//     <div id={instafeedTarget}>
//       <Instafeed
//         limit='5'
//         ref='instafeed'
//         resolution='standard_resolution'
//         sortBy='most-recent'
//         target={instafeedTarget}
//         template=''
//         userId=
//         clientId='clientIdInstagramApiString'
//         accessToken='accessTokenInstagramApiString'
//       />
//     </div>



class Instagram extends React.Component {

    state = {
        imageURLS: []
    }

    fetchData = () => {
        const url = `https://api.instagram.com/v1/users/self/media/recent/?access_token=${newToken}`;
        fetch(url).then((res) => res.json()).then(data => {
            console.log(data)
        })
    }

    render(){

        return(
        <div className="Instagram">
        <Zoom >
            <div className="instaFeed">
            {this.fetchData()}
            </div>
        </Zoom>
        </div>
        )
    }
}

export default Instagram;
