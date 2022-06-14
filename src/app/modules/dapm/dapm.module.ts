import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DapmComponent } from './dapm.component';
import { DapmRoutingModule } from './dapm-routing.module';
import { HeaderModule } from './components/header/header.module';
import { FiltroAlgoritmosModule } from './components/filtro-algoritmos/filtro-algoritmos.module';
import { GridAlgoritmosModule } from './components/grid-algoritmos/grid-algoritmos.modules';
import { DetalhamentoAlgoritmoModule } from './components/detalhamento-algoritmo/detalhamento-algoritmo.module';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { TruncatePipeModule } from 'src/app/shared/pipes/truncate.module';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
    DapmRoutingModule,
    CommonModule,
    HeaderModule,
    FiltroAlgoritmosModule,
    GridAlgoritmosModule,
    DetalhamentoAlgoritmoModule,
    CommonModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatTableModule,
    MatSortModule,
    TruncatePipeModule,
    DetalhamentoAlgoritmoModule,
    MatIconModule,
  ],
  declarations: [DapmComponent]
})
export class DapmModule { }
