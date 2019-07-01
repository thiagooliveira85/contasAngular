import { Component, OnInit } from '@angular/core';
import { LancamentoPesquisa } from './lancamento-pesquisa';
import { Lancamento } from './lancamento';
import { SelectItem } from 'primeng/components/common/selectitem';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  statusPagamento: SelectItem[];
  
  display: boolean;

  lancamento = new Lancamento();
  
  lancamentoPesquisa = new LancamentoPesquisa();

  paginacao = false;

  lancamentosAux = [];

  public lancamentos = [{
    descricao: 'AMEX',
    vencimento: '08/07/2019',
    valor: 200.00,
    parcelas: '1/12',
    status: 'PENDENTE'
  },
  {
    descricao: 'Dentista',
    vencimento: '01/07/2019',
    valor: 150.00,
    parcelas: 'À Vista',
    status: 'PAGO'
  },
  {
    descricao: 'Light',
    vencimento: '01/07/2019',
    valor: 330.00,
    parcelas: 'À Vista',
    status: 'PAGO'
  }
  ];

  constructor(){
    this.lancamento.status = "PENDENTE";

    this.statusPagamento = [
      {label: 'Pago', value: 'PAGO', icon: 'fa fa-check'},
      {label: 'Pendente', value: 'PENDENTE', icon: 'fa fa-spinner'},
      {label: 'Vencido', value: 'VENCIDO', icon: 'fa fa-times'}
    ];
  }
  

  ngOnInit(): void {
    if (this.lancamentos.length > 5) {
      this.paginacao = true;
    } else {
      this.paginacao = false;
    }
    this.lancamentosAux = this.lancamentos;
  }

  pesquisar(){
    
    let obj = this.lancamentos.find( obj => obj.descricao === this.lancamentoPesquisa.descricao);
    
    if (obj != null && obj.descricao != ""){
      this.lancamentos = [obj];
    }else{
      this.lancamentos = this.lancamentosAux;
    }   

  }

  showDialog() {
    this.display = true;
  }

  cadastrar(form:NgForm){
      this.lancamentos.push(this.lancamento);
      this.clearForm(form);
  }

  clearForm(form:NgForm){
    this.lancamento = new Lancamento();  // limpando o formulario 
    form.reset(); // Resetar o estado do formulario (touched, dirty, pristine...)
  }


}
