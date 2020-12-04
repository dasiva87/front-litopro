import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentRoutingModule } from './document-routing-module';
import { CreateDocumentComponent } from './create-document/create-document.component';
import { ListDocumentComponent } from './list-document/list-document.component';
import { UpdateDocumentComponent } from './update-document/update-document.component';



@NgModule({

  declarations: [
    CreateDocumentComponent,
    ListDocumentComponent,
    UpdateDocumentComponent
  ],

  imports: [
    CommonModule,
    DocumentRoutingModule
  ]
})
export class DocumentModule { }
