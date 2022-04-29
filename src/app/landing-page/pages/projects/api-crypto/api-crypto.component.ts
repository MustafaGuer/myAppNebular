import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, tap } from 'rxjs';

import { CURRENCIES } from 'src/app/shared/consts/currencies';

@Component({
  selector: 'app-api-crypto',
  templateUrl: './api-crypto.component.html',
  styleUrls: ['./api-crypto.component.scss'],
})
export class ApiCryptoComponent implements OnInit {
  minApiUrlSingleData: string =
    'https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,JPY,EUR';
  minApiUrlMultipleData: string =
    'https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH&tsyms=USD,EUR';
  minApiUrlCompleteData: string =
    'https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC&tsyms=USD,EUR';
  btcInCurrencies: any = {};
  btcInYen: number = 0;
  datetime: number = Date.now();

  currencies = CURRENCIES;

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.httpClient
      .get(this.minApiUrlSingleData)
      .pipe(
        catchError(this.handleError()),
        map((data) => {
          this.btcInCurrencies = data;

          this.btcInYen = data['JPY'];
        })
      )
      .subscribe();
  }
  private handleError(): any {}
}
