import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { map } from 'rxjs';
import { CurrencyService } from 'src/app/services/currency.service';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent {
  codes = ['INR', 'USD', 'EUR', 'GBP'];
  // @Output() currencySelected = new EventEmitter();
  constructor(private currencyService: CurrencyService, private http: HttpClient) { }

  ngOnInit(): void {
    // this.getData();
    if (!localStorage.getItem('forexRates')) {
      this.getForexData();
    }
    else {
      let q: any = localStorage.getItem('forexRates');
      q = JSON.parse(q);
      this.codes = Object.keys(q);
    }
    // this.getForexData();
  }

  getForexData() {
    const url = 'https://api.forexrateapi.com/v1/latest?api_key=471d26cbc36391b39bf79f54fdb36a75&base=INR';
    return this.http.get(url).pipe(
      map((data: any) => {
        console.log('url hit...data : ', data);
        localStorage.setItem('forexRates', JSON.stringify(data.rates));
        this.codes = Object.keys(data.rates);
        return { data: data.rates, code: Object.keys(data.rates) }
        // return data;
      })
    ).subscribe(
      (value) => {
        this.codes = value.code;


      },
      (err) => {
        console.log('error', err)
      }

    )
  }
  getSelectedCode(event: Event) {
    const ele = event.target as HTMLSelectElement;
    // this.currencySelected.emit(ele.value);
    this.currencyService.updateCurrency(ele.value)
  }
}
