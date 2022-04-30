import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, tap } from 'rxjs';

import { CURRENCIES } from 'src/app/shared/consts/currencies';
import { CRYPTO_LINKS } from 'src/app/shared/consts/crypto-compare-links';

@Component({
  selector: 'app-api-crypto',
  templateUrl: './api-crypto.component.html',
  styleUrls: ['./api-crypto.component.scss'],
})
export class ApiCryptoComponent implements OnInit {
  minApiUrlSingleData: string = CRYPTO_LINKS.single_data;
  minApiUrlMultipleData: string = CRYPTO_LINKS.multiple_data;
  minApiUrlCompleteData: string = CRYPTO_LINKS.complete_data;

  btcInCurrencies: any = {};
  btcInYen: number = 0;
  btcInDollar: number = 0;
  datetime: number = Date.now();

  currencies = CURRENCIES;

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    setInterval(() => {
      this.datetime = Date.now();
    }, 1000);
    this.getSingleDataFromCryptoCurrency();
    setInterval(() => {
      this.getSingleDataFromCryptoCurrency();
    }, 20000);
  }

  private handleError(): any {}

  getSingleDataFromCryptoCurrency() {
    this.httpClient
      .get(this.minApiUrlSingleData)
      .pipe(
        catchError(this.handleError()),
        map((data) => {
          this.btcInCurrencies = data;
          this.btcInYen = data['JPY'];
          this.btcInDollar = data[this.currencies.Dollar];
        })
      )
      .subscribe();
  }
}
