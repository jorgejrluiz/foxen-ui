import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlueComponent } from './blue.component';
import { BlueRoutingModule } from './blue-routing.module';
import { HeaderBlueModule } from './components/header/header.module';
import { GridAlgoritmosModule } from './components/grid-submissoes/grid-submissoes.module';
import { FiltroSubmissoesModule } from './components/filtro-submissoes/filtro-submissoes.module';
import { TurmaRoutingModule } from './pages/turma/turma-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { TruncatePipeModule } from 'src/app/shared/pipes/truncate.module';
import { MatIconModule } from '@angular/material/icon';
import { DetalhamentoSubmissaoModule } from './components/detalhes-submissao/detalhes-submissao.module';

@NgModule({
  imports: [
    BlueRoutingModule,
    CommonModule,
    HeaderBlueModule,
    GridAlgoritmosModule,
    FiltroSubmissoesModule,
    CommonModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatTableModule,
    MatSortModule,
    TruncatePipeModule,
    MatIconModule,
    DetalhamentoSubmissaoModule
  ],
  declarations: [BlueComponent]
})
export class BlueModule { }
