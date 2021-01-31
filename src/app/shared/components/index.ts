import { CalculadoraComponent } from '../../modules/calculadora/calculadora/calculadora.component';
import { SingleComponent } from '../../modules/single/single/single.component';

// import components

export const component: any[] = [

   CalculadoraComponent,
   SingleComponent
]; 

//export all components

export * from '../../modules/calculadora/calculadora/calculadora.component'; // se importa aquí para que sea accedido desde cualquier modulo.
export * from '../../modules/single/single/single.component';
