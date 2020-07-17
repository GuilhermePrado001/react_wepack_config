import clients from './clientes-data.json'

export class Clients {
    static getClients(){
        return new Promise((resolve,reject) => {
            if(clients)
                resolve(clients)
            else
                reject();
        })
    }
}
