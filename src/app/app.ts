import { afterRenderEffect, Component, ViewChild } from '@angular/core';
import { User } from './user/user';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [User, NgIf],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  @ViewChild('user') User: any;
  counter = 0;
  constructor() {
    afterRenderEffect(() => {
      console.log("After Render", this.User.counter);
    })
  }
  updatedCounter() {
    this.counter++;
  }
}
