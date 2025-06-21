import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  profileForm = new FormGroup({
    name: new FormControl('Elisha'),
    age: new FormControl('18'),
    email: new FormControl('elisha@gmail.com'),
    password: new FormControl('elisha@#$'),
  });

  onSubmit() {
    console.log(this.profileForm.value);
  }
  setValues() {
    this.profileForm.setValue({
      name: "Guest",
      age: "18",
      email: "guest@gmail.com",
      password : "guest@#$"
    })
  }
}
