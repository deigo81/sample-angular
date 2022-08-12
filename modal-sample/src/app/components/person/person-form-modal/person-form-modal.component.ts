import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Form } from '@angular/forms';
import { Router } from '@angular/router';
import { Person } from 'src/app/model/person';
import { ModalService } from 'src/app/services/modal-service';
import { PersonsService } from 'src/app/services/person.service';

@Component({
  selector: 'app-person-form-modal',
  templateUrl: './person-form-modal.component.html',
  styleUrls: ['./person-form-modal.component.css']
})
export class PersonFormModalComponent implements OnInit {

  @Input()  person: any; 
  @Input()  modeOpen:string | undefined ;

  constructor(public modalService:ModalService,private personService:PersonsService,private router:Router) {
  
   }

  ngOnInit(): void {
  }

  createPerson(person:Person):void{


    console.log(`create person ${person}`);
  

    person.id = this.personService.getNextPersonId();
    this.personService.createPerson(person);
    let updateList:boolean = true;
    this.modalService.eventEmiterUpdateList.emit(updateList);
    this.closeModal();
  }
  
  updatePerson(person:Person):void{
    console.log(`update person ${person}`);
    this.personService.updatePerson(person);
    let updateList:boolean = true;
    this.modalService.eventEmiterUpdateList.emit(updateList);
    this.closeModal();
 
  }

  deletePerson(person:Person):void{
    console.log(`delete person ${person}`);
    this.personService.removePerson(person);
    let updateList:boolean = true;
    this.modalService.eventEmiterUpdateList.emit(updateList);
    this.closeModal();
 
  }

  closeModal(){
    this.modalService.closeModal();
  }



}
