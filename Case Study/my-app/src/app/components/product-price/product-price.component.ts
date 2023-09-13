import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-price',
  templateUrl: './product-price.component.html',
  styleUrls: ['./product-price.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
  
})
export class ProductPriceComponent {
@Input() code: string = 'INR';
@Input({required:true}) price!: number ;
@Input({required:true}) sellingPrice!: number ;


detectChangeDetection(){
  console.log('product change detected');
}
}
