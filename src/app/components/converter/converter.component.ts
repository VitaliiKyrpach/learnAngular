import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-converter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './converter.component.html',
  styleUrl: './converter.component.scss'
})
export class ConverterComponent {
  first_currency!: number;
  second_currency!: number;
  onChange(e: any){
    console.dir(e.target.id)
    if(e.target.id === 'firstInput'){
      const rawCurrency = this.first_currency / 41
      this.second_currency = parseFloat(rawCurrency.toFixed(2))
    } else{
      const rawCurrency = this.second_currency * 41
      this.first_currency = parseFloat(rawCurrency.toFixed(2))
    }
  }
}
