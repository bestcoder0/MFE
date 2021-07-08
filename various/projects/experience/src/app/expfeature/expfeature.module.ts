import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpfeatureRoutingModule } from './expfeature-routing.module';
import { ExpfeatureComponent } from './expfeature.component';


@NgModule({
  declarations: [
    ExpfeatureComponent
  ],
  imports: [
    CommonModule,
    ExpfeatureRoutingModule
  ]
})
export class ExpfeatureModule { }
