import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  color: number = 1;
  handleColor(val: number) {
    this.color = val;
  }
  handleEvent(event: Event) {
    this.color = parseInt((event.target as HTMLInputElement).value);
  }
}
