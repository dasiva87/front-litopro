import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateBlockComponent } from './create-block/create-block.component';
import { UptadeBlockComponent } from './uptade-block/uptade-block.component';



@NgModule({
  declarations: [CreateBlockComponent, UptadeBlockComponent],
  imports: [
    CommonModule
  ]
})
export class BlockModule { }
