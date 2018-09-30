import React from 'react';
import InstagramEmbed from 'react-instagram-embed'
import Zoom from 'react-reveal/Zoom';
import '../../styles/components/Instagram.css';
var accessToken = '3098531026.1677ed0.e8c4ee4585184111bc75a5506d2b0fbe';
let InstagramAPI = require('instagram-api');
var instagramAPI = new InstagramAPI(accessToken);


class Instagram extends React.Component {


    state = {
        data: []
    }

    componentDidMount(){

        instagramAPI.userSelfMedia().then(function(result) {
            let url = result.data[0].link;
            console.log(url)
            return url;
        }).then(url => this.setState({data:url}));
    }

    render(){
        let data = this.state.data;

        return(
        <div>
        <Zoom >
            <div className="instaFeed">
                <InstagramEmbed url={data} maxWidth={320}></InstagramEmbed>
                <InstagramEmbed url={data} maxWidth={320}></InstagramEmbed>
                <InstagramEmbed url={data} maxWidth={320}></InstagramEmbed>
            </div>
        </Zoom>
        </div>
        )
    }
}

export default Instagram;