import { Component, OnInit } from '@angular/core';
import {ContactService} from '../contact.service';
import {Contact} from '../contact';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
  providers:[ContactService]
})
export class ContactsComponent implements OnInit {
  contacts:any;
  contact:Contact;
  Name:string;
  Position:string;
  Phone:string;
  Email:string;
  Salary:string;


  constructor( private contactService:ContactService) { }

  addContact(){
    const newContact ={
      Name:this.Name,
      Position:this.Position,
      Phone:this.Phone,
      Email:this.Email,
      Salary:this.Salary
    }
    this.contactService.addContact(newContact)
    .subscribe(contact => {
      this.contacts.push(contact);
    }
    
    );
  }

  deleteContact(id:any){
    var contacts=this.contacts;
    this.contactService.deleteContact(id)
    .subscribe(data=>{
      // if(data.n==1)
      // {
      //   for(var i=0;i<contacts.length;i++)
      //   {
      //     if(contacts[i]._id ==id)
      //     {
      //       contacts.splice(i,1);
      //     }
      //   }
      // }
      console.log(data)
    })
  }

  ngOnInit(): void {
    this.contactService.getContacts()
    .subscribe(contacts =>
      this.contacts = contacts)
  }

}
