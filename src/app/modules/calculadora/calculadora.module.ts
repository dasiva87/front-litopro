import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { SharedModule } from 'src/app/shared/shared.module';





@NgModule({

  declarations: [
    CalculadoraComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class CalculadoraModule { }




