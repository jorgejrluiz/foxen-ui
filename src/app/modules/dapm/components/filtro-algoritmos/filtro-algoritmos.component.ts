import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Algoritmo } from 'src/app/shared/models/algoritmos/algoritmo.model';
import { DetalhamentoAlgoritmoComponent } from '../detalhamento-algoritmo/detalhamento-algoritmo.component';

@Component({
  selector: 'app-filtro-algoritmos',
  templateUrl: './filtro-algoritmos.component.html',
  styleUrls: ['./filtro-algoritmos.component.scss']
})
export class FiltroAlgoritmosComponent implements OnInit { 

  @Input() formGroup: FormGroup;
  @Output() novoAlgoritmo = new EventEmitter<Algoritmo>();
  
  constructor(
    private formBuilder: FormBuilder,
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
    
  }

  abrirModalDetalhamento() {
    const dialogRef = this.dialog.open(DetalhamentoAlgoritmoComponent, {
      width: '1024px',
      disableClose: true,
      position: { 
        top: '100px',
      },
      data: {
        
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      this.novoAlgoritmo.emit(result);
    });
  }

}
