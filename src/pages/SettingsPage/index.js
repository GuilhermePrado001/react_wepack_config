import React from 'react';
import ManageStore from '../../components/ManegeStore';
import ManagePromotion from '../../components/ManagePromotion';
import CardManage from '../../components/ManageInfoCard';

const Config = () => {
    return (

        <div style={{height: "500%"}} class="card mt-2">
            <div class="card-header">
                <h5>Configurações</h5>
            </div>
            <div class="card-body">
                <div className="row">
                    <div className="col-md-4 col-sm-12 mt-2">
                        <ManageStore />
                    </div>
                    <div className="col-md-4 col-sm-12 mt-2">
                        <ManagePromotion />
                    </div>
                    <div className="col-md-4 col-sm-12 mt-2">
                        <ManageStore />
                    </div>
                    <div className="col-md-12">
                        <CardManage />
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Config;