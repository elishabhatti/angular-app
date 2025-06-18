import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  x = signal(10);
  y = signal(20);
  z = computed(() => this.x() + this.y());

  showValue() {
    console.log(this.z());
    this.x.set(100);
    console.log(this.z());
  }
  updateX() {
    this.x.set(200)
  }
}
