import { Component } from '@angular/core';
import { Login } from './login/login';
import { Signup } from './signup/signup';
import { ProfileComponent } from './profile/profile.component';

@Component({
  selector: 'app-root',
  imports: [Login, Signup, ProfileComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  count: number = 0;

  handleIncrement() {
    this.count = this.count + 1;
  }
  handleDecrement() {
    this.count = this.count - 1;
  }
  handleReset() {
    this.count = this.count = 0;
  }
}
