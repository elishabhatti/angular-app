import { Component } from '@angular/core';
import { CurrencyConvertorPipe } from './pipe/currency-convertor-pipe';

@Component({
  selector: 'app-root',
  imports: [CurrencyConvertorPipe],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  amount: number = 10;
}
