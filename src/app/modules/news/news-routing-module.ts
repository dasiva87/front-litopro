import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardNewsComponent } from './card-news/card-news.component';

const routes: Routes = [
    {
        path : '', // esto es si enttramos a /documento se va por defecto al componente DocumentsComponent
        component : CardNewsComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentRoutingModule { }
