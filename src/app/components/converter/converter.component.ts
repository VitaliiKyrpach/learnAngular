import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-converter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss']
})

export class ConverterComponent implements OnInit {
  first_currency: string = 'USD';
  second_currency: string = 'UAH';

  rate!: number;
  first_amount: number = 1;
  second_amount!: number;


  constructor(private http: HttpClient, private apiService: ApiService) {}

  ngOnInit() {

    this.apiService.getRate(this.first_currency, this.second_currency).subscribe((data: any)=> {this.rate = data;
    this.second_amount = this.first_amount * this.rate;},  error => {
      console.error('Error fetching rate', error);
    })
    
  }
  

  onType(e: any){
    if(e.target.id === 'firstInput'){
      const rawCurrency = this.first_amount * this.rate
      this.second_amount = parseFloat(rawCurrency.toFixed(2))
    } else{
      const rawCurrency = this.second_amount / this.rate
      this.first_amount = parseFloat(rawCurrency.toFixed(2))
    }
  }

  onChange(e: any){
    if(e.target.id === 'firstOption'){
      this.first_currency = e.target.value.toUpperCase()
      this.apiService.getRate(this.first_currency, this.second_currency).subscribe((data: any)=> {this.rate = data;
        this.second_amount = this.first_amount * this.rate;
      }, error => {
        console.error('Error fetching rate', error);
      })
    } else if(e.target.id === 'secondOption'){
      this.second_currency = e.target.value.toUpperCase()
      this.apiService.getRate(this.first_currency, this.second_currency).subscribe((data: any)=> {this.rate = data;
        this.second_amount = this.first_amount * this.rate;
      },  error => {
        console.error('Error fetching rate', error);
      })
    }
  }

  calc(rate: number, amount: number){
    const rawCurrency = amount * rate
      this.second_amount = parseFloat(rawCurrency.toFixed(2))
  }
}
