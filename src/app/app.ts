import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  name: string = '';
  displayName: string = '';
  email: string = '';
  getName(event: Event) {
    const name = (event.target as HTMLInputElement).value;
    this.name = name;
    console.log(name);
  }
  showName() {
    this.displayName = this.name;
  }
  setName() {
    this.name = 'Sam';
  }
  getEmail(val: string) {
    this.email = val;
    console.log(val);
  }
  setEmail() {
    this.email = 'default@gmail.com';
  }
}
