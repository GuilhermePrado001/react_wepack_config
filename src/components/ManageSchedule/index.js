import React, {useContext} from 'react'
import { SettingContext } from '../../Context/SettingsContext'

const WorkInterval = () => {

    const { timeState, timeDispatch } = useContext(SettingContext)


    const clickHandler = () => {
        timeDispatch({
            type: "TIME_CONFIG",
            payload: $("#selectInterval").val()
        })
    }

    return (
        <div className="card h-100">

            <div class="card-body">
                <h5 class="card-title">Gerenciar Tempo</h5>
                <div class="form-group">

                    <label><b>Intervalo entre cortes</b></label>
                    <select class="form-control" id="selectInterval" defaultValue={timeState}>
                        <option>15</option>
                        <option>30</option>
                        <option>60</option>                   
                    </select>
                </div>

                <button onClick={clickHandler} type="button" class="btn btn-sm btn-outline-primary mt-2">Salvar</button>
            </div>

        </div>
    )
}

export default WorkInterval;