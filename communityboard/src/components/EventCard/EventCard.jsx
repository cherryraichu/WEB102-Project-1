import React from "react";

const EventCard = (props) => { return(
    <div className="EventCard">
        {props.name}
        <br/>
        <button><a href={props.link}>Learn More</a></button>
    </div>
)}
export default EventCard;