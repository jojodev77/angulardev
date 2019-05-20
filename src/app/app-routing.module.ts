import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthModule } from './authentification/auth/auth.module';
import { ConnectComponent } from './authentification/connect/connect.component';
import { CreateUserComponent } from './authentification/create-user/create-user.component';

const routes: Routes = [
  {path: 'creatUser', component: CreateUserComponent},
  {
path: 'auth', children: [
  {path: 'connect', component: ConnectComponent},
  {path: 'createUser', component: CreateUserComponent}
]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
