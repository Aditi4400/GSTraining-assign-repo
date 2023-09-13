import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoComponent } from './demo/demo.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './containers/product-list/product-list.component';
import { CheckoutComponent } from './containers/checkout/checkout.component';
import { ErrorPageComponent } from './containers/error-page/error-page.component';
import { ProductDetailComponent } from './containers/product-detail/product-detail.component';
import { GithubSearchComponent } from './containers/github-search/github-search.component';
import { authGuard } from './services/auth.guard';
import { CartComponent } from './components/cart/cart.component';


const routes: Routes =[ 
  {path: '', component: DemoComponent},
  {path: 'products', component: ProductListComponent},
  {path: 'cart', component: CartComponent},
  {path:'detail/:pid', component:ProductDetailComponent},
  {path:'github', component:GithubSearchComponent},
  {path: 'checkout', component: CheckoutComponent, canActivate: [authGuard]},
  {
    path: 'users', 
    loadChildren: () => import('./user/user.module').then((m)=> m.UserModule),
  },
  {
    path: 'orders', 
    loadChildren: () => import('./user/orders/orders.module').then((m)=> m.OrdersModule),
  },
  {path: '**', component: ErrorPageComponent}
]

@NgModule({
  // declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    //component, directive, pipe
    RouterModule,
  ],
})
export class AppRoutingModule { }
