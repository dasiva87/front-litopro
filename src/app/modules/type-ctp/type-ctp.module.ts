import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TypeCtpComponent } from './type-ctp/type-ctp.component';
import { ListTypeCtpComponent } from './list-type-ctp/list-type-ctp.component';
import { TypeCtpRoutingModule } from './type-ctp-routing-module';

import { SharedModule } from 'src/app/shared/shared.module';




@NgModule({
  declarations: [TypeCtpComponent, ListTypeCtpComponent],
  imports: [
    CommonModule,
    TypeCtpRoutingModule,
    SharedModule
  ]
})
export class TypeCtpModule { }
