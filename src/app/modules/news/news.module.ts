import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateNewsComponent } from './create-news/create-news.component';
import { ListNewsComponent } from './list-news/list-news.component';
import { UpdateNewsComponent } from './update-news/update-news.component';
import { AppComponent } from '../../app.component';
import { CardNewsComponent } from './card-news/card-news.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [AppComponent, CreateNewsComponent, ListNewsComponent, UpdateNewsComponent, CardNewsComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class NewsModule { }
