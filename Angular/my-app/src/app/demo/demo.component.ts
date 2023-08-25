import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent {
    demoData: string ="demo Data"
    showAlert(){
      alert('hello from angular');
      this.demoData='Some updated data';
    }
}
