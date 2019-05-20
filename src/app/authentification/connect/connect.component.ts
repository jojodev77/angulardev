import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.css']
})
export class ConnectComponent implements OnInit {

  formConnect: FormGroup;

version: Array<any> = [
  {versions: 'Angular 2'},
  {versions: 'Angular 4'},
  {versions: 'Angular 5'},
  {versions: 'Angular 6'},
  {versions: 'Angular 7'},
]
  constructor(private fb: FormBuilder, private router: Router ) { }

  ngOnInit() {
  this.formConnect = this.fb.group ({
    name: '',
    password: ''

  })
  }
inscription() {
this.router.navigate(['creatUser']);
}
}
