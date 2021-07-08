import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { ListComponent } from 'projects/resume/src/app/list/list.component';


const URL = 'http://localhost:5002/remoteEntry.js';
const URLexp = 'http://localhost:5003/remoteEntry.js';


const routes: Routes = [{
  path: 'education',
  loadChildren: () => loadRemoteModule({
    remoteEntry: URL,
    remoteName: 'education',
    exposedModule: './EdufeatureModule'
  })
  .then(m =>{
  return m.EdufeatureModule;}
  ) .catch((err) => {
    console.log('err', err);
  })
},
{
  path: '',
  component: ListComponent,
  pathMatch: 'full'
},
{
  path: 'experience',
  loadChildren: () => loadRemoteModule({
    remoteEntry: URLexp,
    remoteName: 'experience',
    exposedModule: './ExpfeatureModule'
  })
  .then(m =>{
  return m.ExpfeatureModule;}
  ) .catch((err) => {
    console.log('err', err);
  })
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
