import React from 'react';
import Zoom from 'react-reveal/Zoom';
import '../../styles/components/items/Instagram.css';
import InstagramItem from './InstagramItem';
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


    componentDidMount(){
        const url = `https://api.instagram.com/v1/users/self/media/recent/?access_token=${newToken}`;
        fetch(url).then((res) => res.json()).then(res => {
            const imageURLS = []
            res.data.map(data => imageURLS.push(data.images.standard_resolution.url))
            this.setState({imageURLS})
        })
    }


    renderImages = () => {
        return this.state.imageURLS.map(url => <InstagramItem src={url} />)
    }

    render(){

        return(
        <div className="Instagram">
            {this.renderImages()}
        </div>
        )
    }
}

export default Instagram;
