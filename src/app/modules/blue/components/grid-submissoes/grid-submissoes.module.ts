import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSortModule} from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { TruncatePipeModule } from '../../../../shared/pipes/truncate.module';
import { MatIconModule } from '@angular/material/icon';
import { GridSubmissoesComponent } from './grid-submissoes.component';
import { DetalhamentoSubmissaoModule } from '../detalhes-submissao/detalhes-submissao.module';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatTableModule,
    MatSortModule,
    TruncatePipeModule,
    MatIconModule,
    DetalhamentoSubmissaoModule
  ],
  declarations: [GridSubmissoesComponent],
  exports: [GridSubmissoesComponent]
})
export class GridAlgoritmosModule { }