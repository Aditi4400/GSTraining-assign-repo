import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { ProductComponent } from './components/product/product.component';
import { ProductListComponent } from './containers/product-list/product-list.component';
import { DiscountPipe } from './pipes/discount.pipe';
import { ConversionPipe } from './pipes/conversion.pipe';
import { ProductPriceComponent } from './components/product-price/product-price.component';
import{ ReactiveFormsModule } from '@angular/forms';
import { CheckoutComponent } from './containers/checkout/checkout.component';
import {errorTailorImports , provideErrorTailorConfig} from '@ngneat/error-tailor';
import { CurrencyComponent } from './components/currency/currency.component';
import { NumbersOnlyDirective } from './directives/numbers-only.directive';
import { ImgFallbackDirective } from './directives/img-fallback.directive';
import { HttpClientModule} from '@angular/common/http';
import { GithubSearchComponent } from './containers/github-search/github-search.component';
import { AppRoutingModule } from './app-routing.module';
import { ErrorPageComponent } from './containers/error-page/error-page.component';
import { ProductDetailComponent } from './containers/product-detail/product-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    ProductComponent,
    ProductListComponent,
    DiscountPipe,
    ConversionPipe,
    ProductPriceComponent,
    CheckoutComponent,
    CurrencyComponent,
    NumbersOnlyDirective,
    ImgFallbackDirective,
    GithubSearchComponent,
    ErrorPageComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    errorTailorImports,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [

    provideErrorTailorConfig({
      errors: {
        useValue: {
          required: 'This field is required',
          minlength: ({ requiredLength, actualLength }) =>
            `Expect ${requiredLength} but got ${actualLength}`,
          zipcode: ({ enteredCode, validCode }) =>
            `Valid pincode is ${validCode}`,
        },
      },
    }),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
