import React from 'react';
import InstagramEmbed from 'react-instagram-embed'
import Zoom from 'react-reveal/Zoom';
import '../../styles/components/Instagram.css';
var accessToken = '3098531026.1677ed0.e8c4ee4585184111bc75a5506d2b0fbe';
let InstagramAPI = require('instagram-api');
var instagramAPI = new InstagramAPI(accessToken);


class Instagram extends React.Component {

    state = {
        data1: [],
        data2: [],
        postIndex: 0,
    }

    loadNextPost = () => {

      let index1 = this.state.postIndex +1;
      let url1 = this.state.data2;
      this.setState({postIndex:index1});
      this.setState({data1:url1});

      let index2 = this.state.postIndex +2;
      instagramAPI.userSelfMedia().then(function(result) {
          let url2 = result.data[index2].link;
          console.log(url2);
          return url2;
      }).then(url2 => this.setState({data2:url2}));

      console.log(this.state.postIndex);
    }


    loadPreviousPost = () => {
      if (this.state.postIndex >= 1) {

        let index2 = this.state.postIndex;
        let url2 = this.state.data1;
        this.setState({data2:url2});

        let index1 = this.state.postIndex -2;
        instagramAPI.userSelfMedia().then(function(result) {
            console.log("Hei");
            let url1 = result.data[index1].link;
            console.log(url1);
            this.setState({postIndex:index1});
            return url1;
        }).then(url1 => this.setState({data1:url1}));
      }

      else {
        console.log("Fail, du ser allerede på den nyeste posten.");
      }
      console.log(this.state.postIndex);
    }


    componentDidMount(){
      instagramAPI.userSelfMedia().then(function(result) {
          let url1 = result.data[0].link;
          console.log(url1);
          return url1;
      }).then(url1 => this.setState({data1:url1}));

      instagramAPI.userSelfMedia().then(function(result) {
          let url2 = result.data[1].link;
          console.log(url2);
          return url2;
      }).then(url2 => this.setState({data2:url2}));



    }



    render(){
        let data1 = this.state.data1;
        let data2 = this.state.data2;

        return(
        <div>
        <Zoom >
            <div className="instaFeed">

                <button onClick={this.loadPreviousPost}> </button>
                <InstagramEmbed url={data1} maxWidth={320}></InstagramEmbed>
                <InstagramEmbed url={data2} maxWidth={320}></InstagramEmbed>
                <button onClick={this.loadNextPost}> </button>

            </div>
        </Zoom>
        </div>
        )
    }
}

export default Instagram;
