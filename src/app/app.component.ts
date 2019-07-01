import { Component, OnInit } from '@angular/core';
import { LancamentoPesquisa } from './lancamento-pesquisa';
import { Lancamento } from './lancamento';
import { SelectItem } from 'primeng/components/common/selectitem';
import { NgForm } from '@angular/forms';
import { ContasService } from './contas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  statusPagamentos: SelectItem[];
  
  display: boolean;

  lancamento = new Lancamento();
  
  lancamentoPesquisa = new LancamentoPesquisa();

  paginacao = false;

  lancamentosAux = [];

  lancamentos: Lancamento[] = [];

  constructor(private contasService:ContasService){
    
    this.lancamento.statusPagamento = "PENDENTE";

    this.statusPagamentos = [
      {label: 'Pago', value: 'PAGO', icon: 'fa fa-check'},
      {label: 'Pendente', value: 'PENDENTE', icon: 'fa fa-spinner'},
      {label: 'Vencido', value: 'VENCIDO', icon: 'fa fa-times'}
    ];
   
  }
  

  ngOnInit(): void {
    this.listarContas();  
  }

  listarContas(){
    this.contasService.listarContas().subscribe(
      response => {
        this.lancamentos = response;
        if (this.lancamentos.length > 10) {
          this.paginacao = true;
        } else {
          this.paginacao = false;
        }
      }
    );
  }

  pesquisar(){
    
    
  }

  showDialog() {
    this.display = true;
  }

  cadastrar(form:NgForm){      
    this.contasService.salvarConta(this.lancamento).subscribe();
    this.clearForm(form);
    this.listarContas();
  }

  clearForm(form:NgForm){
    this.lancamento = new Lancamento();  // limpando o formulario 
    form.reset(); // Resetar o estado do formulario (touched, dirty, pristine...)
  }


}
