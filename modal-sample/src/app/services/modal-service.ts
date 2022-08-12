import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  modal:boolean = false;

  private _eventEmiterUpdateList=new EventEmitter<any>();

  
  
  constructor() { }

  get eventEmiterUpdateList():EventEmitter<any>{
      return this._eventEmiterUpdateList;
  };

 

  openModal(){
    this.modal = true;
  }

  closeModal(){
    this.modal = false;
  }
}
