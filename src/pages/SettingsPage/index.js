import React from 'react';
import ManageStore from '../../Components/ManegeStore';
import ManagePromotion from '../../Components/ManagePromotion';
import CardManage from '../../Components/ManageInfoCard';
import WorkInterval from '../../Components/ManageSchedule';

const Config = () => {
    return (

        <div style={{height: "500%"}} className="card mt-2">
            <div className="card-header">
                <h5>Configurações</h5>
            </div>
            <div className="card-body">
                <div className="row">
                    <div className="col-md-4 col-sm-12 mt-2">
                        <ManageStore />
                    </div>
                    <div className="col-md-4 col-sm-12 mt-2">
                        <ManagePromotion />
                    </div>
                    <div className="col-md-4 col-sm-12 mt-2">
                        <WorkInterval />
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