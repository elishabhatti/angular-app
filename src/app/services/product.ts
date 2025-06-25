import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Product {
  constructor() {
    console.log('product service');
  }
  getProductData() {
    return [
      { name: 'mobile', branch: 'samsung', price: 80000 },
      { name: 'laptop', branch: 'dell', price: 180000 },
      { name: 'laptop', branch: 'hp', price: 30000 },
    ];
  }
}
