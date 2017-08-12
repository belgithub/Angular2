import { Component, OnInit } from '@angular/core';

import {CartService} from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor( private cartService: CartService) { }

  cart:object = {}

  ngOnInit() {
    this.cart = this.cartService.getCart()
  }

  clearCart() {
    this.cart = {};
  }

  setCartDefault(){
    this.cart = this.cartService.getCart();
  }

}
