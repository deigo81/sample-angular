import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonFormModalComponent } from './components/person/person-form-modal/person-form-modal.component';
import { PersonComponent } from './components/person/person.component';

const routes: Routes = [
  {path:'',redirectTo: '/person',pathMatch:'full'},
 
  {path:'person',component:PersonComponent},
 // {path:'person/form/:id',component:PersonFormModalComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
   
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
