import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateThirdComponent } from './create-third/create-third.component';
import { ListThirdComponent } from './list-third/list-third.component';
import { UpdateThirdComponent } from './update-third/update-third.component';



@NgModule({
  declarations: [CreateThirdComponent, ListThirdComponent, UpdateThirdComponent],
  imports: [
    CommonModule
  ]
})
export class ThirdModule { }
