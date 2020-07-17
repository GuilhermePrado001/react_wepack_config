import React, { useState, useEffect } from 'react'
import { Clients } from '../../services/Mock/Clients'

const ClientTable = () => {

    const [clients, setClients] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const { clients } = await Clients.getClients();
            setClients(clients);
        }

        fetchData().then(() => console.log(clients));
    }, [clients]);


    return (

        clients.map((c, i) => {

            if (c.status == 'Agendado' || c.status == 'Almoço') {
                return (
                    <tr className="table-danger">
                        <th scope="row">{c.horario}</th>
                        <td>{c.name}</td>
                        <td>{c.status}</td>
                    </tr>
                )
            }else{
                return (
                    <tr className="table-success">
                        <th scope="row">{c.horario}</th>
                        <td>{c.name}</td>
                        <td>{c.status}</td>
                    </tr>
                )
            }


        })

    )
}

export default ClientTable;