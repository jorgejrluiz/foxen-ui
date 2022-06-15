import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlueComponent } from './blue.component';
import { TurmaComponent } from './pages/turma/turma.component';

const routes: Routes = [
  { path: '', component: BlueComponent},
  { path: 'turma', loadChildren: () => import('./pages/turma/turma.module').then(m => m.TurmaModule) },
  { path: 'turma/:idTurma/atividade', loadChildren: () => import('./pages/atividade/atividade.module').then(m => m.AtividadeModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlueRoutingModule { }