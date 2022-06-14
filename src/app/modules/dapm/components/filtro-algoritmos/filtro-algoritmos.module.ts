import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltroAlgoritmosComponent } from './filtro-algoritmos.component';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

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
  ],
  declarations: [FiltroAlgoritmosComponent],
  exports: [FiltroAlgoritmosComponent]
})
export class FiltroAlgoritmosModule { }
