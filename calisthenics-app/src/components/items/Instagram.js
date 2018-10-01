import React from 'react';
import InstagramEmbed from 'react-instagram-embed'
import Zoom from 'react-reveal/Zoom';
import '../../styles/components/Instagram.css';
var accessToken = '3098531026.1677ed0.e8c4ee4585184111bc75a5506d2b0fbe';
let InstagramAPI = require('instagram-api');
var instagramAPI = new InstagramAPI(accessToken);


class Instagram extends React.Component {

    state = {
        data: [],
        postIndex: 0,
    }

    loadNextPost = () => {
      let index = this.state.postIndex +1;
      this.setState({postIndex:index});
      instagramAPI.userSelfMedia().then(function(result) {
          let url = result.data[index].link;
          console.log(url);
          return url;
      }).then(url => this.setState({data:url}));
    }


    loadPreviousPost = () => {
      if (this.state.postIndex >= 1) {
        let index = this.state.postIndex -1;
        this.setState({postIndex:index});
        instagramAPI.userSelfMedia().then(function(result) {
            let url = result.data[index].link;
            return url;
        }).then(url => this.setState({data:url}));
      }
      else {
        console.log("Fail, du ser allerede på den nyeste posten.");
      }
      console.log(this.state.postIndex);
    }


    componentDidMount(){
      instagramAPI.userSelfMedia().then(function(result) {
          let url = result.data[0].link;
          console.log(url);
          return url;
      }).then(url => this.setState({data:url}));

    }

    render(){
        let data = this.state.data;

        return(
        <div>
        <Zoom >
            <div className="instaFeed">

                <button onClick={this.loadPreviousPost}> </button>
                <InstagramEmbed url={data} maxWidth={320}></InstagramEmbed>

                <button onClick={this.loadNextPost}> </button>

            </div>
        </Zoom>
        </div>
        )
    }
}

export default Instagram;
