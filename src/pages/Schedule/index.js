import React from 'react';
import ManageStore from '../../components/ManegeStore';

const Schedules = () => {
    return (
        <div class="card mt-2">
            <div class="card-header">
                <h5>Configurações</h5>
            </div>
            <div class="card-body">
                <ManageStore/>        
            </div>
        </div>
    )
}

export default Schedules;