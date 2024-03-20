import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {
  countryList: Country[] = [
    new Country('1', 'India'),
    new Country('2', 'Canada'),
    new Country('3', 'USA'),
    new Country('4', 'UAE'),
  ]

  contactForm = new FormGroup({
    firstName: new FormControl('Mohammed',[ Validators.required, Validators.minLength(8)]),
    lastName: new FormControl({
      value: 'Falih',
      disabled: false
    },
      [Validators.required, Validators.maxLength(10)]
    ),
    email: new FormControl('thisisfalih@gmail.com', [Validators.required, Validators.minLength(15)]),
    gender: new FormControl('', [Validators.required]),
    isMarried: new FormControl(true),
    country: new FormControl('2', [Validators.required]),
    address: new FormGroup({
      street: new FormControl('Avenue street', [Validators.required, Validators.minLength(10)]),
      city: new FormControl('Toronto', [Validators.required]),
      pincode: new FormControl('M4C 1B4', [Validators.required])
    })
  })

  get firstname() {
    return this.contactForm.get('firstName');
  }

  get lastname() {
    return this.contactForm.get('lastName');
  }

  get email() {
    return this.contactForm.get('email');
  }

  get gender() {
    return this.contactForm.get('gender');
  }

  get country() {
    return this.contactForm.get('country');
  }

  get street() {
    return this.contactForm.get('address')?.get('street');
  }

  get city() {
    return this.contactForm.get('address')?.get('city');
  }

  get pincode() {
    return this.contactForm.get('address')?.get('pincode');
  }

  onSubmit() {
    console.log(this.contactForm.value)
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