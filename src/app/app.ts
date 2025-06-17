import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  color: string = '';
  handleColor(val: string) {
    this.color = val;
  }
  changeColor(event:Event) {
    this.color = (event.target as HTMLInputElement).value
  }
}
