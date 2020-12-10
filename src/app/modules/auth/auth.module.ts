import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { CreteAccountComponent } from './crete-account/crete-account.component';



@NgModule({
  declarations: [LoginComponent, ForgotPasswordComponent, CreteAccountComponent],
  imports: [
    CommonModule
  ]
})
export class AuthModule { }
