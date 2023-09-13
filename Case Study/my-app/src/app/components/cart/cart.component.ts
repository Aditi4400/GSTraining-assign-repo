import { Component } from '@angular/core';
import { cartType } from 'src/types';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  
  item: cartType[] =  JSON.parse(localStorage.getItem('cartItems') || '[]');

  //let total:number=0;

  updateQuantity(data:cartType){
   // console.log(this.item[data.product.productId].product);
   const index = this.item.findIndex((items) => items.product.productId === data.product.productId);
      if(index !== -1){
        this.item[index].count++;
        localStorage.setItem('cartItems',  JSON.stringify(this.item))
      }
  }

  removeFromCart(data:cartType){
    const index = this.item.findIndex((items) => items.product.productId === data.product.productId);
    if(index !== -1){
      this.item.splice(index,1);
      localStorage.setItem('cartItems',  JSON.stringify(this.item))
    }
  }

}
