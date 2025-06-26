import { Component } from '@angular/core';
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
    });
  }
  addUser(user: User) {
    this.userService.saveUsers(user).subscribe((data: User) => {
      if (data) {
        this.getUsers();
      }
    });
  }
  deleteUser(id: string) {
    this.userService.deleteUser(id).subscribe((data: User) => {
      if (data) {
        this.getUsers();
      }
    });
  }
  selectUser(id: string) {
    this.userService.getSelectedUser(id).subscribe((data: User) => {
      console.log(data);
    });
  }
  ngOnInit() {
    this.getUsers();
  }
}
