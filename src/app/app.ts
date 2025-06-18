import {
  Component,
  computed,
  Signal,
  signal,
  WritableSignal,
} from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  data: WritableSignal<number> = signal(10);
  count: Signal<number> = computed(() => 10);

  updateSignal() {
    // this.data.set('Hello');
    this.data.update((val) => val+ 1)
  }
}
