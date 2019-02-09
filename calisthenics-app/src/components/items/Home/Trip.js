import React from 'react';


const src = "https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-9/31180300_816269808565180_9184631427549888512_o.jpg?_nc_cat=104&_nc_ht=scontent-arn2-1.xx&oh=bed97832bfd25682c7ed4f8c8dc36290&oe=5CEE9792"

const Trip = () => (
    <div className="TripContainer">
        <img width="600" height="400" src={src} />
        <h3>Yearly trip to southern europe!</h3>
    </div>
)


export default Trip;