import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  imports: [FormsModule],
  templateUrl: './form.html',
  styleUrl: './form.css',
})
export class Form {
  onSubmit(form: any) {
    console.log('Email:', form.value.email);
    console.log('Password:', form.value.password);
  }
}
