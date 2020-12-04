import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateTypeCtpComponent } from './update-type-ctp/update-type-ctp.component';
import { CreateTypeCtpComponent } from './create-type-ctp/create-type-ctp.component';
import { ListTypeCtpComponent } from './list-type-ctp/list-type-ctp.component';



@NgModule({
  declarations: [UpdateTypeCtpComponent, CreateTypeCtpComponent, ListTypeCtpComponent],
  imports: [
    CommonModule
  ]
})
export class CtpModule { }
