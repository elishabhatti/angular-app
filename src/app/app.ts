import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './login/login';

@Component({
  selector: 'app-root',
  imports: [Login],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  title = 'Hello Angular from Elisha Jameel';
  name = 'Elisha Jameel';
  x = 12;
  y = 12;
}
