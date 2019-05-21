import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  user: User;
  
  constructor(private router: Router) { }

  ngOnInit() {
   //  this.user = {name: 'jo', password: 'dddd'};
this.router.navigate(['fonction']);
  }

}
