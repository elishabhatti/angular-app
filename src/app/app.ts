import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  bgColor: string = 'red';
  fontSize: string = '30';
  headingSizeBig: string = '80px';
  headingSizeSmall: string = '40px';

  zoom: boolean = false;

  updateHeadingSize() {
    this.zoom = !this.zoom;
  }
}
