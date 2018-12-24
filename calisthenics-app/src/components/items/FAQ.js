import React from 'react';
import FAQitem from './FAQitem';
import '../../styles/components/items/FAQ.css'
import { Accordion, AccordionItem } from 'react-light-accordion';

const data = [
    {title: "Question 1", "content": "Content for question 1"},
    {title: "Question 2", "content": "Content for question 2"},
    {title: "Question 3", "content": "Content for question 3"}
]

class FAQ extends React.Component {


    renderSections = () => {
        return data.map((data,index) => (
            <AccordionItem title={data.title}><FAQitem content={data.content} /></AccordionItem>
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
