import React from 'react';
var accessToken = '23612221.3fcb46b.348431486f3a4fb85081d5242db9ca1c';
let InstagramAPI = require('instagram-api');
var instagramAPI = new InstagramAPI(accessToken);


class Instagram extends React.Component {


    state = {
        posts: []
    }

    componentDidMount(){

        instagramAPI.userSelf().then(function(result) {
            console.log(result.data); // user info
            console.log(result.limit); // api limit
            console.log(result.remaining) // api request remaining
        }, function(err){
            console.log(err); // error info
        });
    }

    render(){

        return(
        <div>
            <p>Instagram</p>
        </div>
        )
    }
}

export default Instagram;