import { Component } from '@angular/core';
import { User } from './user/user';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [User, NgIf],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  counter = 0;
  updatedCounter() {
    this.counter++;
  }
}
