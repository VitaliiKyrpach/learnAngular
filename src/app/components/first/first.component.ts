import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataService } from '../../services/data.service'; 

// import { takeWhile } from 'rxjs';


@Component({
  selector: 'app-first',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './first.component.html',
  styleUrl: './first.component.scss'
})
export class FirstComponent implements OnInit {
  title: string = 'first Component';
  list: string[] = [
    
  ]
  article_name: string = 'this goes from child'
  isVisible: boolean = false;
  type!:string;
  data!: string;

  constructor(private dataService: DataService){}

  // @Output() outputArticle: EventEmitter<string> = new EventEmitter<string>
  // @Output() outputType: EventEmitter<string> = new EventEmitter<string>

  // send(){this.outputArticle.emit(this.article_name)}
  // sendType(){this.outputType.emit(this.type)
  //   this.type = ''
  // }
  
  // @Input() data!: string

  ngOnInit(): void {
    this.dataService.getTitleProp.subscribe(prop => this.data = prop);
    console.log(this.data)
    this.title += ' plus ' + this.data;
  }
  send(){
    this.dataService.setSendProp(this.article_name)
  }
  sendType(){
    this.dataService.setSendType(this.type)
    this.type = ''
  }
  show(){
    console.log('click works', this.isVisible)
  }
  add(){
    this.list.push('new item')
  }
}
