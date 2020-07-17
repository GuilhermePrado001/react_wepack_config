import React, {useContext} from 'react'
import { SettingContext } from '../../Context/SettingsContext'

const CardManage = () => {

    const settingContext = useContext(SettingContext);

    const clickHandler = () =>{
        settingContext.aboutDispatch({
            type: "CHANGE_TEXT",
            payload: $("#aboutText").val()
        })

        $("#aboutText").val("");
    }

    return (
        <div className="card mt-2">
            <div className="card-body">
                <textarea id="aboutText" className="form-control form-control-sm"  placeholder="Escreva um pouco sobre seu salão" style={{resize:"none", height: "20vh"}} ></textarea>
                <button onClick={clickHandler} type="button" className="btn btn-sm btn-outline-primary mt-2">Salvar</button>
            </div>
        </div>      
    )
}

export default CardManage;
