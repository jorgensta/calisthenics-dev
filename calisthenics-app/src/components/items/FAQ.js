import React from 'react';
import Collapsible from 'react-collapsible';
import '../../styles/components/items/FAQ.css'

const Q1 = "This is question 1"
const Q2 = "this is question 2"
const Q3 = "This is question 3"
const Q4 = "this is question 4"



const FAQ = () => (
    <div className="FAQcontainer">
        <Collapsible classParentString="Collapse" trigger={Q1}>
            <p className="FAQtext">This is the collapsible content. It can be any element or React component you like.</p>
            <p className="FAQtext">It can even be another Collapsible component. Check out the next section!</p>
        </Collapsible>
        <Collapsible classParentString="Collapse" trigger={Q2}>
            <p className="FAQtext">This is the collapsible content. It can be any element or React component you like.</p>
            <p className="FAQtext">It can even be another Collapsible component. Check out the next section!</p>
        </Collapsible>
        <Collapsible classParentString="Collapse" trigger={Q3}>
            <p className="FAQtext">This is the collapsible content. It can be any element or React component you like.</p>
            <p className="FAQtext">It can even be another Collapsible component. Check out the next section!</p>
        </Collapsible>
        <Collapsible classParentString="Collapse" trigger={Q4}>
            <p className="FAQtext">This is the collapsible content. It can be any element or React component you like.</p>
            <p className="FAQtext">It can even be another Collapsible component. Check out the next section!</p>
        </Collapsible>
    </div>
)

export default FAQ;
