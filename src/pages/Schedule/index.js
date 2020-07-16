import React from 'react';

const Schedules = () => {
    return (
        <div class="card mt-2">
            <div class="card-header">
                <h5>Agendamentos</h5>
            </div>
            <div class="card-body">
                <table class="table">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">Nome</th>
                            <th scope="col">Horário</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Mark</td>
                            <td>Otto</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Schedules;