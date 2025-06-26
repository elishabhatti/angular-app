import { Component } from '@angular/core';
import { Products } from './services/products';
import { Users } from './services/users';
import { User } from './interfaces/User';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  users: User[] = [];
  constructor(private userService: Users) {}

  getUsers() {
    this.userService.getUsers().subscribe((data: User[]) => {
      this.users = data;
      console.log(data);
    });
  }
  addUser(user: User) {
    this.userService.saveUsers(user).subscribe((data: User) => {
      console.log(data);
    });
    console.log(user);
  }
  ngOnInit() {
    this.getUsers();
  }
}
