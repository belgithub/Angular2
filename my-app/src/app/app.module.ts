import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductsServiceService } from './services/products-service.service';
import { CartComponent } from './cart/cart.component';
import { CartService } from './services/cart.service';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ProductsServiceService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
