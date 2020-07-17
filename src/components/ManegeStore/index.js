import React, { useContext } from 'react'
import BootstrapSwitchButton from 'bootstrap-switch-button-react'
import { SettingContext } from '../../Context/SettingsContext';

function ManageStore() {

  const settingContext = useContext(SettingContext);

  function showInput() {

    if (settingContext.storeState) {
      return (
        <form className="mt-2">

          <div className="row">
            <div className="col">
              <input type="text" className="form-control form-control-sm" placeholder="Nome do Produto" />
              <input type="text" className="form-control form-control-sm mt-2" placeholder="Descrição" />
            </div>
          </div>

          <button className="btn btn-sm btn-primary mt-2" type="button">Adicionar a Loja</button>

        </form>
      );
    }

  }

  return (

    <div className="card h-100">
      <div className="card-body">
        <h5 className="card-title">Gerenciar Loja</h5>

        <BootstrapSwitchButton
          onChange={(checked) => {
            settingContext.storeDispatch({
              type: "SWITCH_VISIBILITY",
              payload: checked
            })
          }}
          checked={settingContext.storeState} size="sm mr-1"
          onstyle="outline-success"
          offstyle="outline-danger"
        />

        {showInput()}

      </div>

    </div>
  )
}

export default ManageStore;