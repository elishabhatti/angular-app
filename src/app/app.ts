import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  display: boolean = true;
  
  hideShowDiv() {
    this.display = !this.display;
  }
}
