import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TurmaComponent } from './turma.component';
import { GridAlgoritmosModule } from '../../components/grid-submissoes/grid-submissoes.module';
import { HeaderBlueModule } from '../../components/header/header.module';
import { TurmaRoutingModule } from './turma-routing.module';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { TruncatePipeModule } from 'src/app/shared/pipes/truncate.module';
import { MatIconModule } from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { InclusaoTurmaModule } from '../../components/inclusao-turma/inclusao-turma.module';

@NgModule({
  imports: [
    CommonModule,
    HeaderBlueModule,
    TurmaRoutingModule,
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,  
    MatNativeDateModule,
    MatDatepickerModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatTableModule,
    MatSortModule,
    TruncatePipeModule,
    MatIconModule,
    MatMenuModule,
    MatSnackBarModule,
    InclusaoTurmaModule,
    TruncatePipeModule
  ],
  declarations: [TurmaComponent],
  exports: [TurmaComponent]
})
export class TurmaModule { }
