import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';


const URL = 'http://localhost:5000/remoteEntry.js';

const routes: Routes = [{
  path: 'education',
  loadChildren: () => loadRemoteModule({
    remoteEntry: URL,
    remoteName: 'education',
    exposedModule: './Module'
  })
  .then(m => m.EduFeatureModule) 
  /*
  loadChildren: () =>
    import('education/EduFeatureModule').then((m) => {
      return m.EduFeatureModule;
    }),
    */
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
