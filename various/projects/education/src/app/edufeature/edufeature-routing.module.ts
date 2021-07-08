import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EdufeatureComponent } from './edufeature.component';

const routes: Routes = [{
  path:'',
  component: EdufeatureComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EdufeatureRoutingModule { }
