import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LeftNavComponent } from './layout/left-nav/left-nav.component';

// MODULES ANGULAR MATERIAL
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatRippleModule} from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [
    AppComponent,
    LeftNavComponent
  ],
  imports: [
    BrowserModule,

    // Core
    AppRoutingModule,
    CoreModule,
    SharedModule,
    BrowserAnimationsModule,

    // Material
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatRippleModule,
    MatButtonModule


  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
