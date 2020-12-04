import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatePrintingComponent } from './create-printing/create-printing.component';
import { UpdatePrintingComponent } from './update-printing/update-printing.component';



@NgModule({
  declarations: [CreatePrintingComponent, UpdatePrintingComponent],
  imports: [
    CommonModule
  ]
})
export class PrintingModule { }
