import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule, FormControl, Validators, ReactiveFormsModule} from '@angular/forms';
import { ApiService } from '../../services/api.service';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-converter',
  standalone: true,
  imports: [CommonModule, FormsModule, MatFormFieldModule, MatSelectModule, MatInputModule],
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

    this.apiService.getRate(this.first_currency, this.second_currency).subscribe({next: (data: any)=> {this.rate = data;
    this.second_amount = this.first_amount * this.rate;}, error: error => {
      console.error('Error fetching rate', error);
    }})
    
  } 
  calcFirstAmount(){
    const rawCurrency = this.second_amount / this.rate
    this.first_amount = parseFloat(rawCurrency.toFixed(2))
  }
  calcSecondAmount(){
    const rawCurrency = this.first_amount * this.rate
    this.second_amount = parseFloat(rawCurrency.toFixed(2))
  }
  onType(e: any){
    if(e.target.id === 'firstInput'){
      this.calcSecondAmount()
      // const rawCurrency = this.first_amount * this.rate
      // this.second_amount = parseFloat(rawCurrency.toFixed(2))
    } else{
      this.calcFirstAmount()
      // const rawCurrency = this.second_amount / this.rate
      // this.first_amount = parseFloat(rawCurrency.toFixed(2))
    }
  }

  onChange(e: any){
    console.log(e)
    if(e.source._id === 'firstOption'){
      this.first_currency = e.value
      this.apiService.getRate(this.first_currency, this.second_currency).subscribe({next: (data: any)=> {this.rate = data;
      this.calcSecondAmount()
        // this.second_amount = this.first_amount * this.rate;
      }, error: error => {
        console.error('Error fetching rate', error);
      }})
    } else if(e.source._id === 'secondOption'){
      this.second_currency = e.value
      this.apiService.getRate(this.first_currency, this.second_currency).subscribe({next: (data: any)=> {this.rate = data;
      this.calcFirstAmount()
        // this.first_amount = this.second_amount / this.rate;
      }, error: error => {
        console.error('Error fetching rate', error);
      }})
    }
    // if(e.target.id === 'firstOption'){
    //   this.first_currency = e.target.value.toUpperCase()
    //   this.apiService.getRate(this.first_currency, this.second_currency).subscribe((data: any)=> {this.rate = data;
    //     this.second_amount = this.first_amount * this.rate;
    //   }, error => {
    //     console.error('Error fetching rate', error);
    //   })
    // } else if(e.target.id === 'secondOption'){
    //   this.second_currency = e.target.value.toUpperCase()
    //   this.apiService.getRate(this.first_currency, this.second_currency).subscribe((data: any)=> {this.rate = data;
    //     this.second_amount = this.first_amount * this.rate;
    //   },  error => {
    //     console.error('Error fetching rate', error);
    //   })
    // }
  }
}
