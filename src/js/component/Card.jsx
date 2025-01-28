import React from "react";

export const Card = (props) => {
    return (
        <div className="card container col-5">
            <img src={props.image}className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
                <a href="#" className="btn btn-success">{props.button}</a>
            </div>
        </div>
    )
}