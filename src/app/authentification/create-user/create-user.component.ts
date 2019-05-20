import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
formCreateUser: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  this.formCreateUser = this.fb.group({
    name: '',
    angular: '',
    exp: '',
    token: '',
    password: ''
  })
  }

}
