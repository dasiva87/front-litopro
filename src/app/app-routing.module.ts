import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/',
    pathMatch: 'full',
  },
  {
    path: '',

    children: [
      {
        path: 'document',
        loadChildren : ()=> import('./modules/document/document.module').then( (m) => m.DocumentModule)

      }
    ]
  },
  {
    path:'**',
    redirectTo:'/',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
