import { Component } from '@angular/core';
import { Product } from './services/product';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  productData:
    | {
        name: string;
        branch: string;
        price: number;
      }[]
    | undefined;

  constructor(private productService: Product) {}
  getProductData() {
    this.productData = this.productService.getProductData();
    console.log(this.productData);
    
  }
}
