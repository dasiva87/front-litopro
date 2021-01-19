import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListTypeCtpComponent } from './list-type-ctp/list-type-ctp.component';
import { TypeCtpComponent } from './type-ctp/type-ctp.component';
 



const routes: Routes = [
    {
        path : '', // esto es si enttramos a /documento se va por defecto al componente DocumentsComponent
        component : ListTypeCtpComponent
    },
    {
      path : 'create', 
      component : TypeCtpComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TypeCtpRoutingModule { }
