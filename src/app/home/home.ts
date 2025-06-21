import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink, NgFor],
  templateUrl: './home.html',
  styleUrl: './home.css',
})

export class Home {
  users = [
    { id:"1", name: "Elisha", age: 18, email: "elisha@gmail.com"},
    { id:"2", name: "Ryan", age: 19, email: "ryan@gmail.com"},
    { id:"3", name: "Noman", age: 21, email: "noman@gmail.com"},
    { id:"4", name: "Jawad", age: 21, email: "jawad@gmail.com"},
  ]
}
