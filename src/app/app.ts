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
}
