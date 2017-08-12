import { Injectable } from '@angular/core';

@Injectable()
export class CartService {

  constructor() { }
  
  cart = [
    { id: 11, name: 'Ball' },
    { id: 12, name: 'Bike' },
  ]; 


  getCart() {
    return this.cart;
  }


}
