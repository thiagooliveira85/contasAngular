import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ButtonModule} from 'primeng/button';
import { AppComponent } from './app.component';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { TableModule} from 'primeng/table';
import { TooltipModule} from 'primeng/tooltip';
import { FormsModule } from '@angular/forms';
import {DialogModule} from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {SelectButtonModule} from 'primeng/selectbutton';

import { LancamentoCadastroComponent } from './lancamento-cadastro/lancamento-cadastro.component';


@NgModule({
  declarations: [
    AppComponent,
    LancamentoCadastroComponent    
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    InputTextModule,
    TableModule,
    TooltipModule,
    FormsModule,
    DialogModule,
    BrowserAnimationsModule,
    SelectButtonModule           
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
