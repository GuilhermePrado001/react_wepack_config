import React, { useContext } from 'react'
import BootstrapSwitchButton from 'bootstrap-switch-button-react'
import { SettingContext } from '../../Context/SettingsContext';

function ManageStore() {

  const settingContext = useContext(SettingContext);

  function showInput() {

    if (settingContext.storeState) {
      return (
        <form className="mt-2">

          <div class="row">
            <div class="col">
              <input type="text" class="form-control" placeholder="Nome do Produto" />
              <input type="text" class="form-control mt-2" placeholder="Descrição" />
            </div>
          </div>

          <button class="btn btn-primary mt-2" type="button">Adicionar a Loja</button>

        </form>
      );
    }

  }

  return (

    <div class="card">
      <div style={{ height: "250px" }} class="card-body">
        <h5 class="card-title">Gerenciar Loja</h5>

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