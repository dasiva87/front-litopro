import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { CalculadoraComponent } from './calculadora.component';
import { AppComponent } from '../../app.component';





@NgModule({
  declarations: [AppComponent, CalculadoraComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class CalculadoraModule { }
