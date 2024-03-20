import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  userform = new FormGroup({
    name: new FormControl(),
    username: new FormControl(),
    email: new FormControl(),
    phone: new FormControl()
  })
  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    this.getUsers().subscribe((response: any) => {
      this.users = response
      console.log(response);
    })
  }

  onSubmit() {
    this.addUsers().subscribe((response) => {
      this.users.push(response)
    })
  }

  getUsers() {
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users')
  }

  addUsers() {
    return this.http.post<User>('https://jsonplaceholder.typicode.com/users', {
      name: this.userform.controls.name.value,
      username: this.userform.controls.username.value,
      email: this.userform.controls.email.value,
      phone: this.userform.controls.phone.value
    })
  }
}

class User {
  name!: string;
  username!: string;
  email!: string;
  phone!: number;
}