import { Injectable } from '@angular/core';

@Injectable()
export class ProductsServiceService {

  constructor() { }

  getProducts() {
    return [
      { id: 11, name: 'Relax' },
      { id: 12, name: 'Active' },
      { id: 13, name: 'Home' },
      { id: 14, name: 'Turism' },
      { id: 15, name: 'Fishing' },
      { id: 16, name: 'Sport' },
      { id: 17, name: 'Electronics' },
    ];
  }
}
