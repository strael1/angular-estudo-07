import { Component } from '@angular/core';
import { logService } from "src/app/logService.service";
import { accountsService } from 'src/app/accounts.service';

@Component({
    selector: 'app-conta-nova',
    templateUrl: './conta-nova.component.html',
    providers: [logService]
})

export class ContaNovaComponent {
  
    constructor(private service: logService, private accountServices: accountsService){}

    createAccount(name: string, status: string){
        this.accountServices.createNewAccount(name,status);
        this.service.logStatus(status);
    }
}