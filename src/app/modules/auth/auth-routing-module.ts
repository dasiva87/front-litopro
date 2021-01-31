import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

import { CreateAccountComponent } from './create-account/create-account.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

const routes: Routes = [
    {
        path : 'login', // esto es si enttramos a /documento se va por defecto al componente DocumentsComponent
        component : LoginComponent
    },
    {
      path : 'create-account', 
      component : CreateAccountComponent
  },
  {
    path : 'forgot-password', 
    component : ForgotPasswordComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
