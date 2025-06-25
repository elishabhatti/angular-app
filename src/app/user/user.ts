import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  @Input() counter = 0;
  name = 'elisha';
  // constructor() {
  //   this.name = 'Sid';
  //   console.log('Constructor');
  // }
  // ngOnInit() {
  //   this.name = 'Sam';
  //   console.log('ng on init');
  // }
  // ngOnDestroy() {
  //   console.log('Ng destroy');
  // }

  ngOnChange() {
    console.log('Ng On Change');
  }
}
