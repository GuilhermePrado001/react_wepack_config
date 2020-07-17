import React from 'react';

const InfoComponent = ({ title, content }) => {
    return (
        <div className="card mt-2 text-center">
            <div className="card-header">
                <h5>{title}</h5>
            </div>
            <div className="card-body">
                <blockquote className="blockquote mb-0">
                    <p>{content}</p>
                </blockquote>
            </div>
        </div>
    )
}

export default InfoComponent;