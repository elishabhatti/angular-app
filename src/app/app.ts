import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [NgIf, NgFor],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  login = false;
  block = 0;

  updateBlock() {
    this.block++;
    if (this.block == 4) {
      this.block = 0;
    }
  }
}
