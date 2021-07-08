import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpfeatureComponent } from './expfeature.component';


const routes: Routes = [{
  path:'',
  component: ExpfeatureComponent
}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExpfeatureRoutingModule { }
