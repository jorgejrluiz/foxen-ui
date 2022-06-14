import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FiltroSubmissoesComponent } from './filtro-submissoes.component';
import { MatNativeDateModule } from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,  
    MatNativeDateModule,
    MatDatepickerModule
  ],
  declarations: [FiltroSubmissoesComponent],
  exports: [FiltroSubmissoesComponent]
})
export class FiltroSubmissoesModule { }
