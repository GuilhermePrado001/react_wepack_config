import React, { useState, useContext, useEffect } from 'react';
import DatePicker from "react-datepicker";
import { registerLocale } from "react-datepicker";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import br from 'date-fns/locale/pt-BR';
import "react-datepicker/dist/react-datepicker.css";
import { SettingContext } from '../../Context/SettingsContext';

registerLocale('br', br)

const DatePickerSchedule = () => {

    const { timeState } = useContext(SettingContext)

    const [startDate, setStartDate] = useState(
        setHours(setMinutes(new Date(), 0), 8)
    );



    let dayChange = date => {

        setStartDate(date)
    }

    return (
        <div className="mt-2 mb-2 text-center">
            <p>Escolha um horário livre na tabela e faça o agendamento</p>
            <button class="btn btn-sm btn-primary mb-1 mr-3" type="button">Agendar</button>
            <DatePicker
                selected={startDate}
                onChange={dayChange}
                locale="br"
                showTimeSelect
                timeFormat="p"
                timeIntervals={timeState}
                minDate={new Date()}
                minTime={setHours(setMinutes(new Date(), 0), 8)}
                maxTime={setHours(setMinutes(new Date(), 0), 18)}
                dateFormat="Pp"
                isClearable
                popperPlacement="top-end"
                excludeTimes={[
                    setHours(setMinutes(new Date(), 0), 12),
                    setHours(setMinutes(new Date(), 30), 12),
                    setHours(setMinutes(new Date(), 0), 13),
                    setHours(setMinutes(new Date(), 30), 13)
                  ]}
                popperModifiers={{
                  offset: {
                    enabled: true,
                    offset: "5px, 10px"
                  },
                  preventOverflow: {
                    enabled: true,
                    escapeWithReference: false,
                    boundariesElement: "viewport"
                  }
                }}
            />
    
        </div>

    );
}

export default DatePickerSchedule;