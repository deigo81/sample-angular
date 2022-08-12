import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Person } from '../model/person';
import { PERSONS } from './personDataSource.json';

@Injectable({
  providedIn: 'root'
})
export class PersonsService {

  persons:Person[] =[];

  constructor() {
    console.log("load Service Module");
      this.persons = PERSONS;
    
   }

  getPersons():Observable<Person[]> {

    this.persons.sort(function(x:Person,y:Person) {

      if (typeof x === 'undefined' ||  typeof y === 'undefined' || typeof x.id === 'undefined'
          || typeof y.id === 'undefined') {
            return 0;
      }
        if ( x.id > y.id) {
            return 1;
        }    
        if (x.id < y.id) {
            return -1;
        }        
        return 0;  
      });

    return of(this.persons);
  }


  getNextPersonId():number{
    if(this.persons.length >0){
      let person = this.persons[this.persons.length-1];
        let nextId:number = 1 ;
        if(typeof person ===undefined || typeof person.id ===undefined){
          return  0;
        }
      return  (person.id ?? 0) + (nextId ?? 0);
    }
    return 1; 
  }

 createPerson(person:Person):Person {
  this.persons.push(person);
  return person;
 }

  updatePerson(person:Person):Person{

   
    this.persons =this.persons.filter(obj => obj !== person);
    
    this.persons.push(person);

    return person;
  }

  removePerson(person:Person):void{
    console.log(`list persons; ${this.persons.length}`);
    this.persons =this.persons.filter(obj => obj !== person);
  }

  gertPersonById(id:number):Person{
   let person = new Person();
  
  
    return person;
  }


}
