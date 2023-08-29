import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',   // equivalent of adding it in app.module.ts 
})
export class CurrencyService {
  private _code:string ="INR";
  private  currencySubject = new BehaviorSubject<string>(this._code);
  currencyObservable : Observable<string> = this.currencySubject.asObservable();

  constructor( private http :HttpClient) {
    this.rehydrate();
  }

  checkNgetData(){
    if(localStorage.getItem('currencyData')) {
        
     return 0;
    }
    else{
      return this.getForexData();
    }
  }
  
  getForexData(){

    const url=`https://api.forexrateapi.com/v1/latest?api_key=f7f6210c629270f63143d7388da13bae&base=INR`

    return this.http.get(url).pipe(
      map((data:any)=>{
        return {rates: data.rates ,codes: Object.keys(data.rates)};
      })
    );
  }
  rehydrate() {
    if (localStorage.getItem('currency')) {
      this._code = localStorage.getItem('currency') as string;
      this.currencySubject.next(this._code);
    }
  }

  // to make data changes
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
