import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSortModule} from '@angular/material/sort';
import { GridAlgoritmosComponent } from './grid-algoritmos.component';
import { MatTableModule } from '@angular/material/table';
import { TruncatePipeModule } from '../../../../shared/pipes/truncate.module';
import { DetalhamentoAlgoritmoModule } from '../detalhamento-algoritmo/detalhamento-algoritmo.module';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatTableModule,
    MatSortModule,
    TruncatePipeModule,
    DetalhamentoAlgoritmoModule,
    MatIconModule,
  ],
  declarations: [GridAlgoritmosComponent],
  exports: [GridAlgoritmosComponent]
})
export class GridAlgoritmosModule { }