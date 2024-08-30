import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FirstComponent } from './components/first/first.component';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './components/users-list/users-list.component';
import { DataService } from './services/data.service';

export interface User{
  name: string,
  age: number
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FirstComponent, UsersListComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title: string = 'testAngular';
  prop?:any
  typed?: string

  constructor(private dataService: DataService){
    this.dataService.setTitleProp(this.title)
  }

  ngOnInit(): void {
    this.dataService.getSendProp.subscribe(prop => this.prop = prop);
    this.dataService.getSendType.subscribe(type => this.typed = type)
  }
  // receiveArticle(article:string){
  //   this.prop = article
  // }
  // receiveType(type:string){
  //   this.typed = type
  // }
}
