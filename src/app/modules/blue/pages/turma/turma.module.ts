import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TurmaComponent } from './turma.component';
import { GridAlgoritmosModule } from '../../components/grid-submissoes/grid-submissoes.module';
import { HeaderBlueModule } from '../../components/header/header.module';
import { TurmaRoutingModule } from './turma-routing.module';

@NgModule({
  imports: [
    CommonModule,
    HeaderBlueModule,
    TurmaRoutingModule
  ],
  declarations: [TurmaComponent],
  exports: [TurmaComponent]
})
export class TurmaModule { }
