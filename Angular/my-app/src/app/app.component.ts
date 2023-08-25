import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  currValue!:string;
  currFunc(data : any): void{
    console.log('currency is',data);
    this.currValue=data;
  }
}
