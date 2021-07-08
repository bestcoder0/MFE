import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { ListComponent } from 'projects/resume/src/app/list/list.component';


const URL = 'http://localhost:5002/remoteEntry.js';


const routes: Routes = [{
  path: 'education',
  loadChildren: () => loadRemoteModule({
    remoteEntry: URL,
    remoteName: 'education',
    exposedModule: './EdufeatureModule'
  })
  .then(m =>{
    debugger;
  return m.EdufeatureModule;}
  ) .catch((err) => {
    console.log('err', err);
    debugger;
  })
  
  /*
  loadChildren: () =>
    import('education/EduFeatureModule').then((m) => {
      return m.EduFeatureModule;
    }),
  */
},
{
  path: '',
  component: ListComponent,
  pathMatch: 'full'
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
