import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {

  constructor() { }
  messages:String[]=[];
  add(entry:String){
    this.messages.push(entry);
  }
  clear():void{
    this.messages=[];
  }
}
