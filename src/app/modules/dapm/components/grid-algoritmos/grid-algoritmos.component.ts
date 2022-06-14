import { LiveAnnouncer } from '@angular/cdk/a11y';
import { ChangeDetectorRef, Component, Input, OnChanges, OnInit } from '@angular/core';
import {MatSort, Sort} from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Algoritmo } from '../../../../shared//models/algoritmos/algoritmo.model';
import { MatDialog } from '@angular/material/dialog';
import { DetalhamentoAlgoritmoComponent } from '../detalhamento-algoritmo/detalhamento-algoritmo.component';


@Component({
  selector: 'app-grid-algoritmos',
  templateUrl: './grid-algoritmos.component.html',
  styleUrls: ['./grid-algoritmos.component.scss']
})



export class GridAlgoritmosComponent implements OnInit, OnChanges {

  @Input() algoritmos: Algoritmo[];
  displayedColumns: string[] = ['descricao', 'complexidade', 'linguagem', 'status', 'algoritmo', 'detalhes'];
  dataSource = new MatTableDataSource<Algoritmo>([]);

  constructor(
    private _liveAnnouncer: LiveAnnouncer,
    public dialog: MatDialog
    ) {}

  ngOnInit() { 
  }

  ngOnChanges () : void {
    debugger;
    if (this.algoritmos.length != 0) {
      this.inicializarDataSource();
    }
  }

  inicializarDataSource() {       
    this.dataSource = new MatTableDataSource(this.algoritmos);
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  abrirModalDetalhamento(algoritmo: Algoritmo) {
    return this.dialog.open(DetalhamentoAlgoritmoComponent, {
      width: '1024px',
      disableClose: true,
      position: { 
        top: '100px',
      },
      data: {
        algoritmo: algoritmo
      },
    });
  }
}

