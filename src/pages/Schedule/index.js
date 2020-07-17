import React from 'react';
import DatePickerSchedule from '../../components/ScheduleCalendar';
import TableSchedule from '../../components/TableSchedule';

const Schedules = () => {
    return (
        <div className="card mt-2">
            <div className="card-header">
                <h5>Agendamentos</h5>
            </div>
            <div className="card-body">

                <DatePickerSchedule />
                <TableSchedule />
          
            </div>
        </div>
    )
}

export default Schedules;