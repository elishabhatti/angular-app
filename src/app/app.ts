import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  count = signal(10);
  x = 20;

  constructor() {
    effect(() => {
      console.log(this.count());
    });
  }

  updateValue() {
    this.count.set(this.count() + 1);
    this.x  = this.x + 1
  }
}
