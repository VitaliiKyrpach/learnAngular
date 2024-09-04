import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent implements OnInit{
  @Input() userData:any
  ngOnInit(): void {
  }

}
