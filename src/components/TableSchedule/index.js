import React from "react";
import ClientTable from "../ClientSchedule";

const TableSchedule = () => {

    return (
        <div className="table-responsive">
            <table className="table table-sm">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Horario</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                    <ClientTable />
                </tbody>
            </table>
        </div>
    )

}

export default TableSchedule;