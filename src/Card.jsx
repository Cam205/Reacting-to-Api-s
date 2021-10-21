import React from 'react';

const Card = (props) => {
    return (
        <div className="row">
            <div className="card border mb-3 m-2 mx-auto">
            <div className="card-header">Film</div>
                <div className="card-body text secondary">
                    <h5 className="card-title">{props.film.title}</h5>
                    <p className="card-text">{props.film.description}</p>
                </div>
            </div>
        </div>
    );
}

export default Card;