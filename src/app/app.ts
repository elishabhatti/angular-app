import { Component } from '@angular/core';
import { Products } from './services/products';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  constructor(private productService: Products) {}
  ngOnInit() {
    this.productService.getProductLists().subscribe((anyData) => {
      console.log(anyData);
      
    })
  }
}
