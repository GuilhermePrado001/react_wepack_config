import React, { useState, useContext } from 'react'
import BootstrapSwitchButton from 'bootstrap-switch-button-react'
import { StoreContext } from '../../Context/StoreContext';

function ManageStore() {

  const [check, setCheck] = useState(false);

  const msg = useContext(StoreContext);

   function showInput() {

    if (check) {
      return (
        <form className="mt-2">

          <div class="row">
            <div class="col">
              <input type="text" class="form-control" placeholder="Nome do Produto" />
              <input type="text" class="form-control mt-2" placeholder="Descrição" />
            </div>
          </div>
            {msg}
          <button class="btn btn-primary mt-2" type="button">Adicionar a Loja</button>

        </form>
      );
    }

  }


  return (
    <div class="card">

      <div style={{height: "250px"}} class="card-body">
        <h5 class="card-title">Gerenciar Loja</h5>
        <BootstrapSwitchButton
          onChange={(checked) => {
            setCheck(checked)
          }}
          checked={check} size="sm mr-1"
          onstyle="outline-success"
          offstyle="outline-danger"         
        />

        {showInput()}

      </div>

    </div>
  )
}

export default ManageStore;