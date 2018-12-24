import React from 'react';
import '../../styles/components/items/FAQ.css'


const FAQitem = (props) => (
    <div className={"section"}>
        <p>{props.content}</p>
    </div>
)


export default FAQitem;