import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  title = 'Hello Angular from Elisha Jameel';
  name = 'Elisha Jameel';
  x = 12;
  y = 12;
}
