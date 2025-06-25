import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  name = 'elisha';
  constructor() {
    this.name = "Sid"
    console.log('Constructor');
  }
  ngOnInit() {
    this.name = "Sam"
    console.log('ng on init');
  }
  ngOnDestroy() {
    console.log("Ng destroy");
    
  }
}
