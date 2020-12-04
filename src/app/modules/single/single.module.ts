import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateSingleComponent } from './create-single/create-single.component';
import { UpdateSingleComponent } from './update-single/update-single.component';



@NgModule({
  declarations: [CreateSingleComponent, UpdateSingleComponent],
  imports: [
    CommonModule
  ]
})
export class SingleModule { }
