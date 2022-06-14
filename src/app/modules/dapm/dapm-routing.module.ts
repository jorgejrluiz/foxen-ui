import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DapmComponent } from './dapm.component';

const routes: Routes = [
  { path: '', component: DapmComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class DapmRoutingModule { }
