import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleComponent } from './single/single.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [SingleComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class SingleModule { }
