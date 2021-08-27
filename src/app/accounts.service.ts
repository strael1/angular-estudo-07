export class accountsService {
    accounts = [
        {name:'120.33.22.33',status: 'inativo'},
    ]

    createNewAccount(name: string,status: string){
        this.accounts.push({name,status});
    }

    updateStatus(id: number, status: string){
        this.accounts[id].status = status;
    }
}