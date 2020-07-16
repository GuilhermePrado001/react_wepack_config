import React from 'react';
import Schedule from '../../components/ScheduleCalendar';

const Schedules = () => {
    return (
        <div class="card mt-2">
            <div class="card-header">
                <h5>Agendamentos</h5>
            </div>
            <div class="card-body">
                <Schedule></Schedule>
            </div>
        </div>
    )
}

export default Schedules;