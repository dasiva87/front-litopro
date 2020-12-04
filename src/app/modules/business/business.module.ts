import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateBusinessComponent } from './create-business/create-business.component';
import { ListBusinessComponent } from './list-business/list-business.component';
import { UpdateBusinessComponent } from './update-business/update-business.component';



@NgModule({
  declarations: [CreateBusinessComponent, ListBusinessComponent, UpdateBusinessComponent],
  imports: [
    CommonModule
  ]
})
export class BusinessModule { }
