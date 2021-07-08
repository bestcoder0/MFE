import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EdufeatureRoutingModule } from './edufeature-routing.module';
import { EdufeatureComponent } from './edufeature.component';


@NgModule({
  declarations: [
    EdufeatureComponent
  ],
  imports: [
    CommonModule,
    EdufeatureRoutingModule
  ]
})
export class EdufeatureModule { }
