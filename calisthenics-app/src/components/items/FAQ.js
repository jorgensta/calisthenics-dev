import React from 'react';
import FAQitem from './FAQitem';
import '../../styles/components/items/FAQ.css'
import { Accordion, AccordionItem } from 'react-light-accordion';
import {faqdata} from '../../assets/FAQdata/faqdata';


class FAQ extends React.Component {


    renderSections = () => {

        return faqdata.map((data,index) => (
            <AccordionItem title={data.title}><FAQitem content={data.content} title={data.title} /></AccordionItem>
        ))
    }

    render(){
        return(
            <div className="FAQcontainer">
                <Accordion atomic={true}>
                    {this.renderSections()}
                </Accordion>
            </div>
        )

    }

} 

export default FAQ;
