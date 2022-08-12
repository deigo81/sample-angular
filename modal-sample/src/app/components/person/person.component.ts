import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/model/person';
import { ModalService } from 'src/app/services/modal-service';
import { PersonsService } from 'src/app/services/person.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

   persons:Person[] = [];

   person:Person | undefined;

   selectedPerson:boolean=false;

   modeOpen:string | undefined;

   
  constructor(private personService:PersonsService,private modalService:ModalService) { 
    console.log('enter page person');
  }

  ngOnInit(): void {
  
      this.personService.getPersons().subscribe( people=>{
        this.persons = people;

      });

      this.modalService.eventEmiterUpdateList.subscribe(param =>{
        if(param == true){
          this.personService.getPersons().subscribe( people=>{
            this.persons = people;
    
          });
        }
      });

  }

  cratePerson(mode:string){
    this.selectedPerson = true;
    this.person = new Person();
    this.modeOpen = mode;
    this.modalService.openModal();
  }

  openModal(person:Person,mode:string){
    console.log("pulsar openModal")
    this.selectedPerson = true;
    this.person = person;
    console.log("modo de entrada"+ mode);
    this.modeOpen = mode;
    console.log("salida de entrada"+ this.modeOpen );
    this.modalService.openModal();
  }


}
