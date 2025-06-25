import { Component } from '@angular/core';
import { Products } from './services/products';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  productList: Products[] = [];
  constructor(private productService: Products) {}
  ngOnInit() {
    this.productService.getProductLists().subscribe((data) => {
      console.log(data);
      this.productList = data.products;
    });
  }
}
