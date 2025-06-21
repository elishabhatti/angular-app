import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  name = new FormControl();
  password = new FormControl();

  displayValue(e:Event) {
    e.preventDefault()
    console.log(this.name.value, this.password.value);
  }
}
