import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  paginacao = false;

  public lancamentos = [{
    descricao: 'AMEX',
    vencimento: '08/07/2019',
    valor: 200.00,
    parcelas: '1/12',
    pagamento: 'PENDENTE'
  },
  {
    descricao: 'Dentista',
    vencimento: '01/07/2019',
    valor: 150.00,
    parcelas: 'À Vista',
    pagamento: 'PAGO'
  },
  {
    descricao: 'Light',
    vencimento: '01/07/2019',
    valor: 330.00,
    parcelas: 'À Vista',
    pagamento: 'PAGO'
  }
  ];

  ngOnInit(): void {
    if (this.lancamentos.length > 5) {
      this.paginacao = true;
    } else {
      this.paginacao = false;
    }
  }

}
