import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  private _code: string = 'INR';
  private currencySubject = new BehaviorSubject<string>(this._code);

  currencyObservable: Observable<string> = this.currencySubject.asObservable();

  constructor(private http: HttpClient) {this.rehydrate() }

  checkNgetData(){

  }

  getValueByCode(code: string){

  }

  
  getForexData(){
    const url = 'https://api.forexrateapi.com/v1/latest?api_key=bb1cd953e7134234c80865b104758a51&base=INR';
    return this.http.get(url).pipe(
      map((data:any)=> {
        console.log('url hit...data : ',data);
        return {data: data.rates, code: Object.keys(data.rate)}
      })
    )
  }

  rehydrate(){
    if(localStorage.getItem('currency')){
      this._code = localStorage.getItem('currency') as string;
      this.currencySubject.next(this._code);
    }
  }

  updateCurrency(code: string) {
    this._code = code;
    this.persistNnotifyData();
  }
  persistNnotifyData() {
    localStorage.setItem('currency', this._code);
    // on every data change, we should give a notification
    this.currencySubject.next(this._code);
  }
}
