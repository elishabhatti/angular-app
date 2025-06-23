import { Component } from '@angular/core';
import { User } from './user/user';

@Component({
  selector: 'app-root',
  imports: [User],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  users = ['Elisha', 'Bruce', 'Wayne', 'Ryan', 'Peter', 'Sam', 'John'];
}
