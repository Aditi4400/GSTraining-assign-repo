import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  Appcurrency!: string;

 
getCurrency(data: string){
 console.log('currency selected in app-product-list',data);
  this.Appcurrency= data;
  
}
}

