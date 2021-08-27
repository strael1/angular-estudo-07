import { Component, OnInit } from '@angular/core';
import { accountsService } from './accounts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [accountsService]
})

export class AppComponent implements OnInit {
  title = 'projeto-servico-angular1';

  constructor(private accountsService: accountsService){}

  accounts: any = [];

  ngOnInit(){
    this.accounts = this.accountsService.accounts;
  }
  
}
