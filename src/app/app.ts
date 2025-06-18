import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  users = ['Elisha', 'Sam', 'Bruce', 'Smith', 'Ryan', 'Jameel', 'Noman'];
  // users = [];
}
