import React from 'react';
import HomeComponent from './Home/HomeComponent';
import '../Body/BodyComponent.css'

const BodyComponent = () => {
    return (
        <div class="card">
            <div class="card-body">
                <HomeComponent />
            </div>
        </div>
    )
}

export default BodyComponent;