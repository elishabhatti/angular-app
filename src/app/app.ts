import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [NgIf],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  show:boolean = false;  

  hideShowHeading() {
    this.show = !this.show
  }
}
