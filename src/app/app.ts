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
  name: string = 'Elisha';
  data: string | number = 'Hello';
  other: boolean = true;

  updateName() {
    this.data = 'Hello World';
    this.name = 'Elisha Jameel';
    this.other = false;
  }
  sum(num1: number, num2: number): number {
    let result = num1 + num2;
    console.log(result);

    return result;
  }
}
