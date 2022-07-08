import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, Subscription, tap } from 'rxjs';

import { CURRENCIES } from 'src/app/shared/consts/currencies';
import { CRYPTO_LINKS } from 'src/app/shared/consts/crypto-compare-links';

@Component({
  selector: 'app-api-crypto',
  templateUrl: './api-crypto.component.html',
  styleUrls: ['./api-crypto.component.scss'],
})
export class ApiCryptoComponent implements OnInit, OnDestroy {
  private minApiUrlSingleData: string = CRYPTO_LINKS.single_data;
  private minApiUrlMultipleData: string = CRYPTO_LINKS.multiple_data;
  private minApiUrlCompleteData: string = CRYPTO_LINKS.complete_data;

  public btcInCurrencies: any = {};
  public btcInYen: number = 0;
  public btcInDollar: number = 0;
  public datetime: number = Date.now();

  public currencies = CURRENCIES;
  private subscription: Subscription = new Subscription();

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

  private getSingleDataFromCryptoCurrency() {
    this.subscription.add(
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
        .subscribe()
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
