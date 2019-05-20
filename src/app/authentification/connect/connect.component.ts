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
