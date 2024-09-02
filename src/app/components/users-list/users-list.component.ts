import { Component, OnInit } from '@angular/core';
import { UserComponent } from '../user/user.component';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [CommonModule, UserComponent],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss'
})
export class UsersListComponent implements OnInit {
  users$!: Observable<any>
  constructor(private http:HttpClient){}
  
  ngOnInit(): void {
    this.users$ = this.http.get('https://reqres.in/api/users').pipe(
      map((data:any)=> {
        console.log('data from api',data)
        return data.data
      })
    )
  
  }

}
