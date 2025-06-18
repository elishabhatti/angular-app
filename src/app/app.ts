import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  username = signal('Elisha');
  count = signal(0);
  displayHeading: boolean = false;

  constructor() {
    effect(() => {
      if (this.count() == 2) {
        this.displayHeading = true;
        setTimeout(() => {
          this.displayHeading = false;
        }, 2000);
      } else {
        this.displayHeading = false;
      }
    });
  }
  toggleValue() {
    this.displayHeading = !this.displayHeading;
    this.count.set(this.count() + 1);
  }
}
