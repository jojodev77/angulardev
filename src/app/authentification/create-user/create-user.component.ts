import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
formCreateUser: FormGroup;
version: Array<any> = [
  {versions: 'Angular 2'},
  {versions: 'Angular 4'},
  {versions: 'Angular 5'},
  {versions: 'Angular 6'},
  {versions: 'Angular 7'},
];


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
