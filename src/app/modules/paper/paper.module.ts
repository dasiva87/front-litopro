import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatePaperComponent } from './create-paper/create-paper.component';
import { UpdatePaperComponent } from './update-paper/update-paper.component';
import { ListPaperComponent } from './list-paper/list-paper.component';



@NgModule({
  declarations: [CreatePaperComponent, UpdatePaperComponent, ListPaperComponent],
  imports: [
    CommonModule
  ]
})
export class PaperModule { }
