import React from 'react';
import Zoom from 'react-reveal/Zoom';
import Modal from '@material-ui/core/Modal';
import '../../styles/components/items/Instagram.css';
const newToken = "3098531026.d6d68a3.57098e5aa962411cbe5d1333737358df";


class Instagram extends React.Component {

    state = {
      imageInfo: [],
      modalInfo: "",
      open: false,
    }

    fetchData = () => {
      const url = `https://api.instagram.com/v1/users/self/media/recent/?access_token=${newToken}`;
      fetch(url).then((res) => res.json()).then(data => {
          this.setState({ imageInfo: data });
          console.log(this.state.imageInfo);
      })

    }

    componentDidMount() {
      const url = `https://api.instagram.com/v1/users/self/media/recent/?access_token=${newToken}`;
      fetch(url).then((res) => res.json()).then(data => {
          let imageArray = [];
          for (let i = 0; i<12; i++) {
            imageArray.push(data.data[i]);
          }
          this.setState({ imageInfo: imageArray});
          console.log(imageArray);
      })
    }

    async fetchByID(selectedpicture) {
      const url = `https://api.instagram.com/v1/media/`+ selectedpicture.id + `/?access_token=${newToken}`;
      await fetch(url).then((res) => res.json()).then(data => {
        if (data.data.videos) {
          this.setState({modalInfo: data.data})
          console.log("dette er en video");
        }
        else if (data.data.images){
          this.setState({modalInfo: data.data})
          console.log("dette er et bilde");
        }
      })
      this.setState({ open: true });

    }

    handleOpen = (selectedpicture) => {
      this.fetchByID(selectedpicture);
    };

    handleClose = () => {
      this.setState({ open: false });
    };


    render(){
    var thumbnails;

      if (this.state.imageInfo) {
        thumbnails = this.state.imageInfo.map(imageObject => {
          return (
                    <div key={imageObject.images.thumbnail.url} style={{cursor: 'pointer'}} onClick={() => this.handleOpen(imageObject)} className="insta-thumbnail">
                    <img alt="as" src={imageObject.images.thumbnail.url}/>
                    </div>
                  )
                });
      }

    var modalContent;
    // sjekk om det er en video eller bilde og vis innhold basert på det.

      if (this.state.modalInfo.videos) {
        modalContent = (
        <div className="modalContainer">
            <div className="modalMedia">
                <video width="auto" height="auto" controls>
                    <source src={this.state.modalInfo.videos.standard_resolution.url} type="video/mp4"/>
                </video>
            </div>
            <div className="instagramText">
                Se denne videoen og mange flere på vår instagram! [Insert link her]
            </div>
        </div>
      )
      }
      else if (this.state.modalInfo.images) {
        modalContent = (
        <div className="modalContainer">
            <div className="modalMedia">
                <img className="modalPicture" alt="" src={this.state.modalInfo.images.standard_resolution.url} />
            </div>
            <div className="instagramText">
                Se dette bildet og mange flere på vår instagram! [Insert link her]
            </div>
        </div>
      )
      }
      else { modalContent = (<div>heiheihei</div>)
      }


        return(
        <div className="Instagram">
        <Zoom>
            <div className="instaFeed">

              <div className="insta-feed">

                <Modal
                  className="modal"
                  open={this.state.open}
                  onClose={this.handleClose}

                >
                    {modalContent}
                </Modal>


                {thumbnails}

              </div>

            </div>
        </Zoom>
        </div>


        )
    }
}

export default Instagram;
