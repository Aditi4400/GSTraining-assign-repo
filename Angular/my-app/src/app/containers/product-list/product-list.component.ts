import { Component, DestroyRef, Input, OnChanges, OnInit, inject } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { CurrencyService } from 'src/app/services/currency.service';
import { ProductService } from 'src/app/services/product.service';
import { ProductType } from 'src/types';
import{ takeUntilDestroyed} from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers : [ProductService],
})
export class ProductListComponent implements OnInit {
  //@Input({required:true}) selectedCode!: string;
   
  // plist : ProductType[]=[
  // {
  //   productId:100,
  //   productImage:'https://www.google.com/imgres?imgurl=https%3A%2F%2Fimg.freepik.com%2Ffree-vector%2Fcute-student-cartoon-character_1308-133976.jpg%3Fw%3D2000&tbnid=vL0VIfm4HBtNPM&vet=12ahUKEwjRvLvAvfKAAxVMvGMGHeCmBLQQMygCegQIARBv..i&imgrefurl=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fgirl-cartoon&docid=AEgI-IT_c6b-6M&w=1094&h=2000&q=image%20of%20cartoon&ved=2ahUKEwjRvLvAvfKAAxVMvGMGHeCmBLQQMygCegQIARBv',
  //   productName:'test',
  //   productPrice:1100.345,
  //   productSalePrice:1000,
  //   productStock:12,
  // },
  // {
  //   productId:101,
  //   productImage:'https://www.google.com/imgres?imgurl=https%3A%2F%2Fimg.freepik.com%2Ffree-vector%2Fcute-student-cartoon-character_1308-133976.jpg%3Fw%3D2000&tbnid=vL0VIfm4HBtNPM&vet=12ahUKEwjRvLvAvfKAAxVMvGMGHeCmBLQQMygCegQIARBv..i&imgrefurl=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fgirl-cartoon&docid=AEgI-IT_c6b-6M&w=1094&h=2000&q=image%20of%20cartoon&ved=2ahUKEwjRvLvAvfKAAxVMvGMGHeCmBLQQMygCegQIARBv',
  //   productName:'test',
  //   productPrice:1500.567,
  //   productSalePrice:1200,
  //   productStock:0,
  // }
  // ];
  currencyCode !: string;
  someOtherData="test";
  plist:ProductType[]=[];
  currency$!: Subscription;
  destroyRef =inject(DestroyRef);
  curr$ : Observable<string>;
  product$: Observable<ProductType[]>;

  constructor(
    private productService : ProductService,
    private currencyService : CurrencyService,
    private router: Router,
    ){
      this.curr$=this.currencyService.currencyObservable;
      this.product$=this.productService.getProducts();
    }

  ngOnInit(): void {
    // this.getData();
    // this.currencyService.currencyObservable.subscribe(
    //   (code) => (this.currencyCode= code)
    // );

    this.currencyService.currencyObservable
    .pipe(takeUntilDestroyed(this.destroyRef))
    .subscribe((code)=> (this.currencyCode= code));
  }

  ngOnDestroy() : void{

  }
  getData(){
    this.productService.getProducts().subscribe(
      (data)=>{
        console.log('success',data);
        this.plist=data;
      },
      (err)=>{
        console.log('error',err);
      }
    );
  }


  addItem(data: any){
    console.log('add item to cart',data);
    this.router.navigateByUrl('/cart');
  }
  

}
