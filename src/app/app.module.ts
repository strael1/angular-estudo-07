import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContaNovaComponent } from './components/conta-nova/conta-nova.component';
import { ContaComponent } from './components/conta/conta.component';

@NgModule({
  declarations: [
    AppComponent,
    ContaComponent,
    ContaNovaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
