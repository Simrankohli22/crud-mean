import { Injectable } from '@angular/core';
import{Headers} from '@angular/http';
import { Contact } from './contact';
import { HttpClient,HttpHeaders, HttpErrorResponse} from '@angular/common/http';

// import 'rxjs/add/operator/map';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  //retrieving ContactService
getContacts()
{
  return this.http.get('http://localhost:3000/employees')
  .pipe(
    map(res =>res));
}
//add contact method
addContact(newContact: any)
{
  var headers = new HttpHeaders();
  // headers.append('Content-Type','application/json');
  console.log("newcontact",newContact)
  return this.http.post('http://localhost:3000/employees',newContact,{headers:headers})
  .pipe(
  map(res =>res));
}
//deleting contact
deleteContact(id: string)
{
  console.log("id***********",id)
 return this.http.delete('http://localhost:3000/employees/'+id)
 .pipe(
   map(res =>res));
}
//edit contact
getContactById(id: string)
{
  // console.log("id***********",id)
 return this.http.get('http://localhost:3000/employees/'+id)
 .pipe(
   map(res =>res));
}
updateContactById(id: string,data:any)
{
  // console.log("id***********",id)
  var headers = new HttpHeaders();
 return this.http.put('http://localhost:3000/employees/'+id,data,{headers:headers})
 .pipe(
   map(res =>res));
}
}
