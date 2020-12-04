import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateTypeMachineComponent } from './create-type-machine/create-type-machine.component';
import { UpdateTypeMachineComponent } from './update-type-machine/update-type-machine.component';
import { ListTypeMachineComponent } from './list-type-machine/list-type-machine.component';



@NgModule({
  declarations: [CreateTypeMachineComponent, UpdateTypeMachineComponent, ListTypeMachineComponent],
  imports: [
    CommonModule
  ]
})
export class MachineModule { }
