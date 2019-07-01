import { Injectable } from '@angular/core';
import { Lancamento } from './lancamento';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContasService {

  //private url:string = "http://www.mocky.io/v2/5d197f1a2f00000e00fd6fc4";
  //private url: string = "http://192.168.3.3:8080/contas-api";
  private url: string = "http://localhost:8080/contas-api";

  constructor(private http: HttpClient) { }

  public listarContas(): Observable<Lancamento[]> {

    let pass = 'Basic ' + btoa("admin:admins");

    let reqHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
      //'Authorization': pass,
      //'Access-Control-Allow-Origin': '*'
    });    

    return this.http.get<Lancamento[]>(this.url, { headers: reqHeaders });
  }

  public salvarConta(conta: Lancamento) {
    console.log(conta);
    console.log(this.url);
    return this.http.post<Lancamento>(this.url, conta);
  }
}

/* 

[
  {
     "id":18,
     "descricao":"Dentista",
     "dataVencimento":"2019-05-09",
     "valor":150.07,
     "parcelas":"VISTA",
     "statusPagamento":"PAGO"
  },
  {
     "id":2,
     "descricao":"Light",
     "dataVencimento":"2019-03-10",
     "valor":622.00,
     "parcelas":"A VISTA",
     "statusPagamento":"PAGO"
  },
  {
     "id":15,
     "descricao":"Shopify",
     "dataVencimento":"2019-05-07",
     "valor":120.00,
     "parcelas":"A VISTA",
     "statusPagamento":"PAGO"
  },
  {
     "id":7,
     "descricao":"American Express",
     "dataVencimento":"2019-05-07",
     "valor":2500.00,
     "parcelas":"A VISTA",
     "statusPagamento":"PAGO"
  },
  {
     "id":17,
     "descricao":"Show do Gaab",
     "dataVencimento":"2019-05-02",
     "valor":80.00,
     "parcelas":"VISTA",
     "statusPagamento":"PAGO"
  },
  {
     "id":11,
     "descricao":"Garagem",
     "dataVencimento":"2019-05-08",
     "valor":100.00,
     "parcelas":"A VISTA",
     "statusPagamento":"PAGO"
  },
  {
     "id":14,
     "descricao":"Seguro",
     "dataVencimento":"2019-05-19",
     "valor":281.00,
     "parcelas":"10/12",
     "statusPagamento":"PAGO"
  }
] */
