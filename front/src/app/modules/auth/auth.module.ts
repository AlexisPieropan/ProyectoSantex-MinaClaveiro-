import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RecoverPasswordComponent } from './recover-password/recover-password.component';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    LoginComponent,
    LoginFormComponent,
    RecoverPasswordComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MatInputModule, 
    MatIconModule,
    MatButtonModule
  ],
  exports: [
    LoginComponent,
    LoginFormComponent,
    RecoverPasswordComponent,
    MatIconModule,
    MatButtonModule
  ]
})
export class AuthModule { }
