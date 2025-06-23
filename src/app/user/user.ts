import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  @Output() getUsers = new EventEmitter();
  users = ['Elisha', 'Bruce', 'Wayne', 'Ryan', 'Peter', 'Sam', 'John'];
  loadData() {
    this.getUsers.emit(this.users);
  }
}
