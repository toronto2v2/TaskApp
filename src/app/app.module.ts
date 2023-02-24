import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PasswordComponent } from './components/test-password/test-password.component';
import { PasswordInputComponent } from './components/password-input/password-input.component';
import { PasswordColoredComponent } from './components/password-colored/password-colored.component';
@NgModule({
  declarations: [
    AppComponent,
    PasswordComponent,
    PasswordInputComponent,
    PasswordColoredComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
