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
  handleEvent(event: any) {
    console.log('function called', event.type);
    console.log('value', event?.target?.value);
  }
}
