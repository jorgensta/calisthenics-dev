import React from 'react';
import '../../styles/components/items/FAQ.css'


const FAQitem = (props) => (
    <div className="section">
        <p className="sectionText">{props.content}</p>
    </div>
)


export default FAQitem;