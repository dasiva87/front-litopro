import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateSettingComponent } from './update-setting/update-setting.component';
import { CreateSettingComponent } from './create-setting/create-setting.component';



@NgModule({
  declarations: [UpdateSettingComponent, CreateSettingComponent],
  imports: [
    CommonModule
  ]
})
export class SettingModule { }
