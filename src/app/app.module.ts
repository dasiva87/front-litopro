import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LeftNavComponent } from './layout/left-nav/left-nav.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    LeftNavComponent,
  ],
  imports: [
    BrowserModule,


    // Core
    AppRoutingModule,
    CoreModule,
    SharedModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,

  ],
  
  providers: [
    {
      provide: LocationStrategy, // Esto es para quitar de la ruta el nuemral #
      useClass: PathLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
