import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';

const routes: Routes = [{
  path:'',
  component: ListComponent,
  pathMatch: 'full'
},{
  path:'education',
  loadChildren:() =>
    import('./edufeature/edufeature.module').then(m => m.EdufeatureModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
