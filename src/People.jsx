import React from 'react';

const People = (props) => {
    return (
        <div className="row">
            <div className="card border mb-3 m-2 mx-auto">
            <div className="card-header">People</div>
                <div className="card-body text secondary">
                    <p className="card-text">Name: {props.people.name}</p>
                    <p className="card-text">Age: {props.people.age}</p>
                    <p className="card-text">Gender: {props.people.gender}</p>
                    <p className="card-text">Eye Color: {props.people.eye_color}</p>
                    <a href={props.people.url} class="card-text">{props.people.url}</a>
                </div>
            </div>
        </div>
    );
}

export default People;