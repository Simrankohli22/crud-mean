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
  update=false;
  id:any;


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
    .subscribe((contact:any) => {
      this.contacts.push(contact.data);
    }
    );
  }

  getContactById(id){
    this.contactService.getContactById(id)
    .subscribe((contact:any) => {
      this.Name=contact.Name,
       this.Position=contact.Position,
      this.Phone=contact.Phone,
      this.Email=contact.Email,
      this.Salary=contact.Salary
    }
    );
    this.update=true;
    this.id=id;
  }
  async updateContactById(){
    const newContact ={
      Name:this.Name,
      Position:this.Position,
      Phone:this.Phone,
      Email:this.Email,
      Salary:this.Salary
    }
   await this.contactService.updateContactById(this.id,newContact)
    .subscribe((contact:any) => {
      // this.contacts.push(contact.data);
      this.Name="",
      this.Position="",
     this.Phone="",
     this.Email="",
     this.Salary=""
     this.update=false;
     this.id=''
    }
    );
    this.contacts=[]
    this.contactService.getContacts()
    .subscribe(contacts =>
      this.contacts = contacts)

      this.update=false;
  }

  cancel(){
    this.Name="",
    this.Position="",
   this.Phone="",
   this.Email="",
   this.Salary=""
   this.update=false;
   this.id=''
  }
  deleteContact(id:any){
    // var contacts=this.contacts;
    this.contactService.deleteContact(id)
    .subscribe(data=>{
      // if(data.n==1)
      // {
        for(var i=0;i<this.contacts.length;i++)
        {
          if(this.contacts[i]._id ==id)
          {
            this.contacts.splice(i,1);
          }
        }
      // }
      console.log(data)
    })
  }

  ngOnInit(): void {
    this.contactService.getContacts()
    .subscribe(contacts =>
      this.contacts = contacts)

      this.update=false;
  }

}
