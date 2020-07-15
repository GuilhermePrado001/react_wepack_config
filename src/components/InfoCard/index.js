import React from 'react';

const InfoComponent = ({ title, content }) => {
    return (
        <div class="card mt-2 text-center">
            <div class="card-header">
                <h5>{title}</h5>
            </div>
            <div class="card-body">
                <blockquote class="blockquote mb-0">
                    <p>{content}</p>
                </blockquote>
            </div>
        </div>
    )
}

export default InfoComponent;