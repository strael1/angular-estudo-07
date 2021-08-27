import { Component,Input } from "@angular/core";
import { logService } from "src/app/logService.service";
import { accountsService } from "src/app/accounts.service";

@Component({
    selector: 'app-conta',
    templateUrl: './conta.component.html',
    providers: [logService]
})

export class ContaComponent {
    @Input('cc') account!: {name: string, status: string}; 
    @Input('id') id!: number;
    constructor(private service: logService, private accountServices: accountsService){}

    setStatus(status: string) {
        this.accountServices.updateStatus(this.id, status);
        this.service.logStatus(status);
        console.log(this.id);
    }

}