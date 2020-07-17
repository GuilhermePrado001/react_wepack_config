import React, { useState } from 'react';
import BootstrapSwitchButton from 'bootstrap-switch-button-react'


function ManagePromotion() {

    const [check, setCheck] = useState(false);

    function showInput() {

        if (check) {
            return (
                <form className="mt-2">
                    <p>
                        <small className="text-muted">Após quantos corte o cliente ganhará o corte grátis?</small>
                        <input type="text" className="form-control form-control-sm " placeholder="Qtd" />
                    </p>               
                </form>
            );
        }
    }

    return (
        <div className="card h-100">
            
            <div className="card-body">
                <h5 className="card-title">Gerenciar Promoção</h5>
                
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

export default ManagePromotion;