import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateDocumentDetailsComponent } from './create-document-details/create-document-details.component';
import { UpdateDocumentDetailsComponent } from './update-document-details/update-document-details.component';
import { ListDocumentDetailsComponent } from './list-document-details/list-document-details.component';



@NgModule({
    declarations: [CreateDocumentDetailsComponent, UpdateDocumentDetailsComponent, ListDocumentDetailsComponent],
    imports: [
        CommonModule
    ]
})


export class DocumentDetailsModule { }
