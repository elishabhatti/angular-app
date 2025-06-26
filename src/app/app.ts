import { Component } from '@angular/core';
import { Products } from './services/products';
import { Users } from './services/users';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  users: any;
  constructor(private userService: Users) {}
  ngOnInit() {
    this.userService.getUsers().subscribe((data: any) => {
      this.users = data;
      console.log(data);
      
    });
  }
}
