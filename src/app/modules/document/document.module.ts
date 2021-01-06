import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentRoutingModule } from './document-routing-module';
import { CreateDocumentComponent } from './create-document/create-document.component';
import { ListDocumentComponent } from './list-document/list-document.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({

  declarations: [
    CreateDocumentComponent,
    ListDocumentComponent,
  ],

  imports: [
    CommonModule,
    DocumentRoutingModule,
    SharedModule
  ]
})
export class DocumentModule { }
