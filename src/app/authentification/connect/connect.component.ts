import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MIN_LENGTH_VALIDATOR } from '@angular/forms/src/directives/validators';

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
    name: ['', Validators.required],
    password: ['', Validators.minLength(6)]

  });
  }
inscription() {
this.router.navigate(['creatUser']);
}
}
