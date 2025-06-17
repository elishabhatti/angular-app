import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  display: boolean = true;
  hideDiv() {
    this.display = false;
  }
  showDiv() {
    this.display = true;
  }
}
