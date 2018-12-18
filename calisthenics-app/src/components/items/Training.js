import React from 'react';
import Collapsible from 'react-collapsible';
import '../../styles/components/items/Training.css';

const Training = () => (
    <div className="Training">
        <Collapsible classParentString="Collapse" trigger="Start here, about our training">
            <p>This is the collapsible content. It can be any element or React component you like.</p>
            <p>It can even be another Collapsible component. Check out the next section!</p>
        </Collapsible>
    </div>
)

export default Training;
