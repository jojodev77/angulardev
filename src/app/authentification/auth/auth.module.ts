import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConnectComponent } from '../connect/connect.component';
import { CreateUserComponent } from '../create-user/create-user.component';
import { MaterialModule } from 'src/app/amterial/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
  declarations: [
    ConnectComponent,
    CreateUserComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [

  ]
})
export class AuthModule { }
