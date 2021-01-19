import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListNewsComponent } from './modules/news/list-news/list-news.component';

const routes: Routes = [
  { path:'', component: ListNewsComponent , /* este es el Home*/ },
  { path:'', redirectTo:'/', pathMatch: 'full' },

  { path: '',
    children: [
      {
        path: 'document',
        loadChildren : ()=> import('./modules/document/document.module').then( (m) => m.DocumentModule)
      }
    ]
  },

  { path: '',
    children: [
      {
        path: 'news',
        loadChildren : ()=> import('./modules/news/news.module').then( (m) => m.NewsModule)
      }
    ]
  },

  { path: '',
    children: [
      {
        path: 'type-ctp',
        loadChildren : ()=> import('./modules/type-ctp/type-ctp.module').then( (m) => m.TypeCtpModule)
      }
    ]
  },
  { path:'**', pathMatch: 'full', redirectTo:'/'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
