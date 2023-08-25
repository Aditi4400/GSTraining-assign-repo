import { Component, Input } from '@angular/core';
import { ProductType } from 'src/types';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  @Input({required:true}) selectedCode!: string;
   
  plist : ProductType[]=[
  {
    productId:100,
    productImage:'https://www.google.com/imgres?imgurl=https%3A%2F%2Fimg.freepik.com%2Ffree-vector%2Fcute-student-cartoon-character_1308-133976.jpg%3Fw%3D2000&tbnid=vL0VIfm4HBtNPM&vet=12ahUKEwjRvLvAvfKAAxVMvGMGHeCmBLQQMygCegQIARBv..i&imgrefurl=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fgirl-cartoon&docid=AEgI-IT_c6b-6M&w=1094&h=2000&q=image%20of%20cartoon&ved=2ahUKEwjRvLvAvfKAAxVMvGMGHeCmBLQQMygCegQIARBv',
    productName:'test',
    productPrice:1100.345,
    productSalePrice:1000,
    productStock:12,
  },
  {
    productId:101,
    productImage:'https://www.google.com/imgres?imgurl=https%3A%2F%2Fimg.freepik.com%2Ffree-vector%2Fcute-student-cartoon-character_1308-133976.jpg%3Fw%3D2000&tbnid=vL0VIfm4HBtNPM&vet=12ahUKEwjRvLvAvfKAAxVMvGMGHeCmBLQQMygCegQIARBv..i&imgrefurl=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fgirl-cartoon&docid=AEgI-IT_c6b-6M&w=1094&h=2000&q=image%20of%20cartoon&ved=2ahUKEwjRvLvAvfKAAxVMvGMGHeCmBLQQMygCegQIARBv',
    productName:'test',
    productPrice:1500.567,
    productSalePrice:1200,
    productStock:0,
  }
  ];
  addItem(data: any){
    console.log('add item to cart',data);
  }
  

}
