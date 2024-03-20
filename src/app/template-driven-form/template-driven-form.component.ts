import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrl: './template-driven-form.component.css'
})
export class TemplateDrivenFormComponent implements OnInit {
  countryList: Country[] = [
    new Country('1', 'India'),
    new Country('2', 'Canada'),
    new Country('3', 'USA'),
    new Country('4', 'UAE'),
  ]

  contact!: Contact;

  ngOnInit(): void {
    this.contact = {
      firstName: "Mohammed",
      lastName: "Falih",
      email: "thisisfalih@gmail.com",
      gender: "male",
      maritalStatus: true,
      country: '1',
      address: {
        street: 'New Street',
        city: 'Cumbum',
        pincode: '625516'
      }
    }
  }

  onSubmit(data: NgForm) {
    console.log(data.value);
  }
}

class Country {
  id: string;
  name: string; 
  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
}

class Contact {
  firstName!: string;
  lastName!: string;
  email!: string;
  gender!: string;
  maritalStatus!: boolean;
  country!: string;
  address!: {
    street: string;
    city: string;
    pincode: string;
  }
}