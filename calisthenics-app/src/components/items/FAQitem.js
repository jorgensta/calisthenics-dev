import React from 'react';
import '../../styles/components/items/FAQ.css'
import {refGymFit, refApplicationForm} from '../../assets/FAQdata/faqdata';


const FAQitem = (props) => (
    <div className="section">
        <p className="sectionText">{props.content}
        {props.title.includes('Q2:') ? <a href={refGymFit}> Gymfit gymnastics </a> : ''}
        {props.title.includes('Q4') ? <a href={refApplicationForm}>here</a> : ''}
        </p>
    </div>
)

export default FAQitem;