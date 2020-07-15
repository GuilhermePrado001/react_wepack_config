import React, { useState, useContext } from 'react';
import BootstrapSwitchButton from 'bootstrap-switch-button-react'
import { PromotionContext } from '../../Context/PromotionContext';

function ManagePromotion() {

    const [check, setCheck] = useState(false);

    const msg = useContext(PromotionContext);

    function showInput() {

        if (check) {
            return (
                <form className="mt-2">

                    <p>
                        <small class="text-muted">Após quantos corte o cliente ganhará o corte grátis?</small>
                        <input type="text" class="form-control w-25" placeholder="Qtd" />
                    </p>
                    {msg}
                </form>
            );
        }
    }

    return (
        <div style={{height: "250px"}} className="card">
            
            <div class="card-body">
                <h5 class="card-title">Gerenciar Promoção</h5>
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