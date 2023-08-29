import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DemoComponent } from './demo/demo.component';
import { ProductListComponent } from './containers/product-list/product-list.component';
import { CheckoutComponent } from './containers/checkout/checkout.component';
import { ErrorPageComponent } from './containers/error-page/error-page.component';
import { ProductDetailComponent } from './containers/product-detail/product-detail.component';
import { GithubSearchComponent } from './containers/github-search/github-search.component';
import { authGuard } from './services/auth.guard';



const routes : Routes =[
  {path :'',component:DemoComponent},
  {path :'products',component:ProductListComponent},
  {path :'details/:pid',component: ProductDetailComponent},
  {path :'github',component:GithubSearchComponent},
  {path :'checkout',component:CheckoutComponent , canActivate:[authGuard]},
  {path : 'user',
  loadChildren: ()=>import('./user/user.module').then((m)=> m.UserModule) ,
  },

  {path : 'orders',
  loadChildren: ()=>import('./user/orders/orders.module').then((m)=> m.OrdersModule) ,
  },
  
  {path : '**',component : ErrorPageComponent} // this 404 path should always be the last one in sequence  
];

@NgModule({
 
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports :[
    RouterModule
  ],
})

export class AppRoutingModule { }
