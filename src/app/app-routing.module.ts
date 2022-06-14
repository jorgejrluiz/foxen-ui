import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [  
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dapm'
  },
  {
    path: 'dapm',
    loadChildren: () => import('./modules/dapm/dapm.module').then(m => m.DapmModule)
  },
  {
    path: 'blue',
    loadChildren: () => import('./modules/blue/blue.module').then(m => m.BlueModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
