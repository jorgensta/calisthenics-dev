import React from 'react';
import InstagramEmbed from 'react-instagram-embed'
import Zoom from 'react-reveal/Zoom';
import Modal from '@material-ui/core/Modal';
import ReactDOM from 'react-dom';
import '../../styles/components/items/Instagram.css';
var accessToken = '3098531026.1677ed0.e8c4ee4585184111bc75a5506d2b0fbe';
let InstagramAPI = require('instagram-api');
var instagramAPI = new InstagramAPI(accessToken);



class Instagram extends React.Component {

    state = {
        data: [],
        open: false,
    }


        handleOpen = () => {
          this.setState({ open: true });
        };

        handleClose = () => {
          this.setState({ open: false });
        };

    componentDidMount(){
      var request = new XMLHttpRequest();
			request.open('GET', 'https://api.instagram.com/v1/users/self/media/recent/?access_token=3098531026.1677ed0.e8c4ee4585184111bc75a5506d2b0fbe&count=12', true);

      console.log("hei");
			request.onload = function(container) {
			  if (request.status >= 200 && request.status < 400) {
			    // Success!
			    var data = JSON.parse(request.responseText);
          var urls = []
			    for (var i=0;i < data.data.length;i++) {
			    	var container = document.getElementById('insta-feed');
			    	var imgURL = data.data[i].images.thumbnail.url;
			    	urls.push(imgURL);
            console.log(urls);
            }
          const ImageContainer = () => (
            <React.Fragment>
            <div onClick={this.handleOpen} className="instapic">
              <img alt="" src={urls[0]}/>
            </div>
            <div onClick={this.handleOpen} className="instapic">
              <img alt="" src={urls[1]}/>
            </div>
            <div onClick={this.handleOpen} className="instapic">
              <img alt="" src={urls[2]}/>
            </div>
            <div onClick={this.handleOpen} className="instapic">
              <img alt="" src={urls[3]}/>
            </div>
            <div onClick={this.handleOpen} className="instapic">
              <img alt="" src={urls[4]}/>
            </div>
            <div onClick={this.handleOpen} className="instapic">
              <img alt="" src={urls[5]}/>
            </div>
            <div onClick={this.handleOpen} className="instapic">
              <img alt="" src={urls[6]}/>
            </div>
            <div onClick={this.handleOpen} className="instapic">
              <img alt="" src={urls[7]}/>
            </div>
            <div onClick={this.handleOpen} className="instapic">
              <img alt="" src={urls[8]}/>
            </div>
            <div onClick={this.handleOpen} className="instapic">
              <img alt="" src={urls[9]}/>
            </div>
            </React.Fragment>)
            ReactDOM.render(<ImageContainer/>, document.getElementById('insta-feed'));
  			    console.log(data);
			    }
			   else{
          request.onerror = function() {
    			  // There was a connection error of some sort
    			};
			  }
        console.log("Hei");
        request.send();
			}
    }



    render(){

        return(
        <div className="Instagram">
        <Zoom >
            <div className="instaFeed">


                <div id="insta-feed"></div>
                <Modal
                  className="modal"
                  open={this.state.open}
                  onClose={this.handleClose}
                >
                <h1>tittel på bildet</h1>
                </Modal>

            </div>
        </Zoom>
        </div>
        )
    }
}

export default Instagram;
