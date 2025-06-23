import { Component } from '@angular/core';
import { User } from './user/user';

@Component({
  selector: 'app-root',
  imports: [User],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  users: undefined | string[];
  userHandle(users: string[]) {
    this.users = users
    console.log(users);
  }
}
