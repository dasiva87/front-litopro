import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListTypeSheetComponent } from './list-type-sheet/list-type-sheet.component';
import { CreateTypeSheetComponent } from './create-type-sheet/create-type-sheet.component';



@NgModule({
  declarations: [ListTypeSheetComponent, CreateTypeSheetComponent],
  imports: [
    CommonModule
  ]
})
export class TypeSheetModule { }
