import { useState } from 'react'; 

export const ListDetails = ({card}) => {

    return (
    <div className="list-container"
        style={{ borderColor: `${card.border_color}`,
        fontFamily: `${card.font}`, 
        color: `${card.text_color}`}}>
        <br/>
        <br/>
            <h5 className="list-title">{list.title}</h5>

            {front ? ( 
                <div className="front-card">
                    <div className="front-message">{card.front_message}</div>
                </div>
            ) : (
            <div className="card-container-back">
                <div className="back-message">{card.back_message}</div>
            </div>
            )}
        <br/>
        <div>
            <div className="author">{`created by ${card.owner}`}</div>
        </div>
    </div>
    )
}