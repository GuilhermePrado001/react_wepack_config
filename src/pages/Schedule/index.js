import React from 'react';
import DatePickerSchedule from '../../components/ScheduleCalendar';
import TableSchedule from '../../components/TableSchedule';

const Schedules = () => {
    return (
        <div class="card mt-2">
            <div class="card-header">
                <h5>Agendamentos</h5>
            </div>
            <div class="card-body">

                <DatePickerSchedule />
                <TableSchedule />
          
            </div>
        </div>
    )
}

export default Schedules;