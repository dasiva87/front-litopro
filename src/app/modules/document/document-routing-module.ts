import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListDocumentComponent } from './list-document/list-document.component';

const routes: Routes = [
    {
        path : '', // esto es si enttramos a /documento se va por defecto al componente DocumentsComponent
        component : ListDocumentComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentRoutingModule { }
