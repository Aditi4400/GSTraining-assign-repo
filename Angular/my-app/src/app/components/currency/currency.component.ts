import { Component, EventEmitter, Output } from '@angular/core';
import { CurrencyService } from 'src/app/services/currency.service';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent {
  codes=['INR','USD','GBP','EUR'];
  //@Output() currencySelected=new EventEmitter();

  constructor (private currencyService : CurrencyService) {}

  getSelectedCode(event : Event){
    const ele=event.target as HTMLSelectElement;
    //this.currencySelected.emit(ele.value);
    this.currencyService.updateCurrency(ele.value);
  }

  ngOnInit():void{
   if(localStorage.getItem('codes'))
   {
      this.codes=JSON.parse(localStorage.getItem('codes') as string);
   }
   else
   {
      this.currCode();
   }
   

  }

  currCode(){
    this.currencyService.getForexData().subscribe( 
      (data)=>{ 
        console.log(data);
        this.codes=data.codes;
        localStorage.setItem('code',JSON.stringify(this.codes));
        localStorage.setItem('rates',JSON.stringify(data.rates));
      }
    )
}

}
