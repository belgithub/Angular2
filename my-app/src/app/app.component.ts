import { Component } from '@angular/core';


import {ProductsServiceService} from './services/products-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private productService: ProductsServiceService
  ) { }

  // class properties
  products: object = {};
  title= 'Shop';
  name = 'Shop application';
  descriptio = 'Applicaition to lean Angular2+ posipilities';
  price = 100;
  // enum Category = {
  //   CategoryA,
  //   CategoryB,
  //   CategoryC,
  //   CategoryD
  // };
  categorys = [
    {id: 0, name: 'CategoryA'},
    {id: 1, name: 'CategoryB'},
    {id: 2, name: 'CategoryC'},
    {id: 3, name: 'CategoryD'}
  ];
  isAvailable = true;
  
  ngOnInit (): void {
    console.log('ngOnInit invoke this.productService.getProducts ');
    this.products = this.productService.getProducts();
  }

  buyEvent(event) {
    console.log(event);
  }
}
