import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductType } from 'src/types';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input({required:true}) code!: string;

    @Input({required:true}) data!: ProductType;
    @Output() btnClick= new EventEmitter();
    notifyParent()
    {
      this.btnClick.emit({
        id: this.data.productId,
        name: this.data.productName
      });
    }
}
