import React from 'react';
import '../../styles/components/items/Contact.css';


class Contact extends React.Component {
    
    onSubmit(){

    }


    render(){
        return(
    <div className="Contact">
        <div className="contactContainer">
            <div>
                Facebook
            </div>
            <div className="mailContainer">
                <div>
                Mail
                </div>
                <form onSubmit={this.onSubmit()}>
                <div>
                message
                </div>
                <textarea>
                </textarea>
                </form>
            </div>
        </div>
    </div>
    )}
}


export default Contact;
