import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateTemplateComponent } from './create-template/create-template.component';
import { ListTemplateComponent } from './list-template/list-template.component';
import { UpdateTemplateComponent } from './update-template/update-template.component';



@NgModule({
  declarations: [CreateTemplateComponent, ListTemplateComponent, UpdateTemplateComponent],
  imports: [
    CommonModule
  ]
})
export class TemplateModule { }
