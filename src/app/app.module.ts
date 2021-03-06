import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu/menu/menu.component';
import { MaterialModule } from './amterial/material/material.module';
import { AuthModule } from './authentification/auth/auth.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FonctionComponent } from './pages/fonction/fonction.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FonctionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    AuthModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
