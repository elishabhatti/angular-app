import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [NgIf, NgFor],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  students = ['Elisha', 'Noman', 'Ryan', 'Bruce', 'Yash', 'Babloo', 'Joel'];
  studentsData = [
    { name: 'Elisha', age: 18, email: 'elisha@gmail.com' },
    { name: 'Noman', age: 21, email: 'noman@gmail.com' },
    { name: 'Ryan', age: 18, email: 'ryan@gmail.com' },
    { name: 'Joel', age: 17, email: 'joel@gmail.com' },
    { name: 'Babloo', age: 16, email: 'babloo@gmail.com' },
    { name: 'Bruce', age: 54, email: 'bruce@gmail.com' },
  ];
}
