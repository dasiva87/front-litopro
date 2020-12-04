import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateFinisheComponent } from './create-finishe/create-finishe.component';
import { ListFinisheComponent } from './list-finishe/list-finishe.component';
import { UpdateFinisheComponent } from './update-finishe/update-finishe.component';



@NgModule({
  declarations: [CreateFinisheComponent, ListFinisheComponent, UpdateFinisheComponent],
  imports: [
    CommonModule
  ]
})
export class FinisheModule { }
