import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  userDetails:any = {};
  addDetails(val: NgForm) {
    console.log(val);
    this.userDetails = val
  }
}
