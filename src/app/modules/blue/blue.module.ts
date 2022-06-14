import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlueComponent } from './blue.component';
import { BlueRoutingModule } from './blue-routing.module';
import { HeaderBlueModule } from './components/header/header.module';
import { GridAlgoritmosModule } from './components/grid-submissoes/grid-submissoes.module';
import { FiltroSubmissoesModule } from './components/filtro-submissoes/filtro-submissoes.module';
import { TurmaRoutingModule } from './pages/turma/turma-routing.module';

@NgModule({
  imports: [
    BlueRoutingModule,
    CommonModule,
    HeaderBlueModule,
    GridAlgoritmosModule,
    FiltroSubmissoesModule,
  ],
  declarations: [BlueComponent]
})
export class BlueModule { }
