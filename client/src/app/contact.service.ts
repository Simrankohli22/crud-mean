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
  return this.http.get('http://localhost:3000/employees/contacts')
  .pipe(
    map(res =>res));
}
//add contact method
addContact(newContact: any)
{
  var headers = new HttpHeaders();
  // headers.append('Content-Type','application/json');
  return this.http.post('http://localhost:3000/employees/contacts',newContact,{headers:headers})
  .pipe(
  map(res =>res));
}
//deleting contact
deleteContact(id: string)
{
 return this.http.delete('http://localhost:3000/employees/contacts'+id)
 .pipe(
   map(res =>res));
}
}
