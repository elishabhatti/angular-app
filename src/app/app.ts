import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  users = ['Elisha', 'Ryan', 'Noman', 'Jawad', 'Tony', 'Sam', 'Bruce'];
  students= [
    {name: "Elisha", age: 18, email: "elisha@gmail.com"},
    {name: "Ryan", age: 19, email: "ryan@gmail.com"},
    {name: "Noman", age: 21, email: "noman@gmail.com"},
    {name: "Jawad", age: 21, email: "jawad@gmail.com"},
  ]
  getName(name:string) {
    console.log(name);
    
  }
}
