import { ContactsComponent } from './contacts/contacts.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // {
  //   path:'login', component:LoginComponent
  // }
  {
  path:'',redirectTo:'/contacts',pathMatch:'full'
  },
  {
  path:'contacts',component:ContactsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }