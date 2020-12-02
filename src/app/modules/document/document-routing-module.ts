import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocumentsComponent } from './documents/documents.component';

const routes: Routes = [
    {
        path : '', // esto es si enttramos a /documento se va por defecto al componente DocumentsComponent
        component : DocumentsComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentRoutingModule { }
