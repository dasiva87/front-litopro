import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentsComponent } from './documents/documents.component';
import { DocumentRoutingModule } from './document-routing-module';



@NgModule({

  declarations: [
    DocumentsComponent
  ],

  imports: [
    CommonModule,
    DocumentRoutingModule
  ]
})
export class DocumentModule { }
