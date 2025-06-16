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

  handleCounter(val: string) {
    if (val === 'minus') {
      if (this.count >= 0) {
        this.count = this.count - 1;
      }
    } else if (val === 'plus') {
      this.count = this.count + 1;
    } else {
      this.count = 0;
    }
  }
}
