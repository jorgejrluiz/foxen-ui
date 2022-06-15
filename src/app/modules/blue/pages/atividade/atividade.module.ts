import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtividadeComponent } from './atividade.component';
import { AtividadeRoutingModule } from './atividade-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { HeaderBlueModule } from '../../components/header/header.module';
import { MatTableModule } from '@angular/material/table';
import { TruncatePipeModule } from 'src/app/shared/pipes/truncate.module';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { DetalhesAtividadeModule } from '../../components/detalhes-atividade/detalhes-atividade.module';

@NgModule({
  imports: [
    CommonModule,
    AtividadeRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatAutocompleteModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,  
    MatNativeDateModule,
    MatDatepickerModule,
    CommonModule,
    HeaderBlueModule,
    MatTableModule,
    TruncatePipeModule,
    MatIconModule,
    MatMenuModule,
    MatSnackBarModule,
    DetalhesAtividadeModule,
    MatIconModule
  ],
  declarations: [AtividadeComponent],
  exports: [AtividadeComponent]
})
export class AtividadeModule { }
