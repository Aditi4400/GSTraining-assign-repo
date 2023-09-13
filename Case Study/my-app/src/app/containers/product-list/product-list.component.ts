import { Component, DestroyRef, Input, OnChanges, OnInit, SimpleChanges, inject } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { CurrencyService } from 'src/app/services/currency.service';
import { ProductService } from 'src/app/services/product.service';
import { ProductType, cartType } from 'src/types';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop'
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [ProductService],
})
export class ProductListComponent {
  currentPage:number=1;
  pageSize:number=20;
  filterString="";
  sortString="";
  currency!: string;
  plist: ProductType[] = [];
  currency$!: Subscription;
  destroyRef = inject(DestroyRef);
  curr$: Observable<string>;
  product$: Observable<ProductType[]>
  //cartlist:cartType[]=[];
  
  constructor(
    private productService: ProductService, 
    private currencyService: CurrencyService, 
    private router: Router
    ){ 
      this.curr$= this.currencyService.currencyObservable;
      this.product$ = this.productService.getProducts();
     }
     

  ngOnInit(): void {
    // this.getData();
    
    this.currencyService.currencyObservable
    .pipe(takeUntilDestroyed(this.destroyRef))
    .subscribe((code)=>(this.currency= code));

    this.product$.subscribe((data)=>{
      this.plist = data;
      console.log("plist : ", this.plist);
    });

  }

  ngOnDestroy():void{

  }
  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log(changes);
  // }

  // getData(){
  //   this.productService.getProducts().subscribe(
  //     (data)=>{
  //       console.log('success', data)
  //       this.plist=data;
  //     },
  //     (err) =>{
  //       console.log('error', err)
  //     }
  //   )
  // }

  updatePrice(){
    const product= this.plist[0];
    product.productSalePrice = 950;
    this.plist= [{...product}, this.plist[1]]
  }

addItem(data:ProductType){
  //console.log('added', data);

  const newItem:cartType={
    count:1,
    product:data,
  }
  //console.log(newItem);

  let cart:cartType[] = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems') as string): null;
   //console.log('cart', cart);

  if(cart){

    //iterate over the json after parsing the string sored in local storage and if the product exists increase the count else add new 
    const i=cart.findIndex((order: cartType) => order.product.productId === newItem.product.productId)
    if(i!==-1)
    {
      //console.log(cart)
      cart[i].count++;
    }
    else
    {
      cart.push(newItem);
    }
    localStorage.setItem('cartItems',JSON.stringify(cart));
  }

  else
  {
    // let j = cart.findIndex((order: cartType) => order.product.productId === newItem.product.productId)
    let cart1 : cartType[]=[];
    cart1.push(newItem);
    localStorage.setItem('cartItems',JSON.stringify(cart1));
  }
  // else{
  //   //add data to list and setitem to local  after converting into string.
  //   // const newItem:cartType={
  //   //   count:1,
  //   //   product:data,
  //   // }
  //   // this.cartlist.push(newItem)
  //   localStorage.setItem('cartItems',JSON.stringify([newItem]));
  // }

  this.router.navigateByUrl('/cart')
}
priceSort(event:any){
  this.sortString="price";
  console.log(this.sortString);
}
nameSort(event:any){
  this.sortString="name";
  console.log(this.sortString);
}


previousPage() {
  console.log("previos working ...");
  if (this.currentPage > 1) {
    this.currentPage--;
  }
}

nextPage() {
  console.log("next working ...");
  const maxPage = Math.ceil(this.plist.length / this.pageSize);
  if (this.currentPage < maxPage) {
    this.currentPage++;
  }
}

}
