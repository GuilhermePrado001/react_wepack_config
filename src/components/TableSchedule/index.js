import React from "react";
import ClientTable from "../ClientSchedule";

const TableSchedule = () => {

    return (
        <div class="table-responsive">
            <table class="table">
                <thead class="thead-dark">
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