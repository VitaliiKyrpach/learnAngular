import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
// import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
    // api = import.meta.env.NG_APP_API_KEY;

    constructor( private http: HttpClient){}

    getRate(first: string, second: string): Observable<number> {
        return this.http.get<any>(`https://v6.exchangerate-api.com/v6/cf09dbca6a177371f41b1a15/pair/${first}/${second}`)
        .pipe(
          map((data:any)=> {
            console.log('currency from api',data.conversion_rate)
            return data.conversion_rate
          }))
    }
  }
  