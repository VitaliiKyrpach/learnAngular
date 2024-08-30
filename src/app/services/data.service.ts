import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private titleProp = new BehaviorSubject('from service');
  getTitleProp = this.titleProp.asObservable();

  private sendProp = new BehaviorSubject('')
  getSendProp = this.sendProp.asObservable();

  private sendType = new BehaviorSubject('');
  getSendType = this.sendType.asObservable();

  constructor() { }

  setTitleProp(title: string){
    this.titleProp.next(title);
  }

  setSendProp(prop: string){
    this.sendProp.next(prop)
  }

  setSendType(type: string){
    this.sendType.next(type)
  }
}
