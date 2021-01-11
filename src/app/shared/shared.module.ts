import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import * as fromComponents from './components'


//FLEX
import { FlexLayoutModule } from '@angular/flex-layout';

// MODULES ANGULAR MATERIAL
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatRippleModule} from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator'
import {MatDialogModule} from '@angular/material/dialog';




@NgModule({
  declarations: [...fromComponents.component],

  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,

        // Material
        MatSidenavModule,
        MatListModule,
        MatToolbarModule,
        MatIconModule,
        MatRippleModule,
        MatButtonModule,
        MatCheckboxModule,
        MatGridListModule,
        MatCardModule,
        MatInputModule,
        MatTableModule,
        MatPaginatorModule,
        MatDialogModule,
        
    
        // FLEX
        FlexLayoutModule,

        ReactiveFormsModule

  ],

  exports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    ...fromComponents.component,

        // Material
        MatSidenavModule,
        MatListModule,
        MatToolbarModule,
        MatIconModule,
        MatRippleModule,
        MatButtonModule,
        MatCheckboxModule,
        MatGridListModule,
        MatCardModule,
        MatInputModule,
        MatTableModule,
        MatPaginatorModule,
        MatDialogModule,
        
    
        // FLEX
        FlexLayoutModule,

        ReactiveFormsModule


  ]

})

export class SharedModule { }
