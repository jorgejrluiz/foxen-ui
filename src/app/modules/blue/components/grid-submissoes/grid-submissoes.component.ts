import { Component, OnInit } from '@angular/core';
import { SubmissaoModel } from '../../../../shared/models/blue/submissao.model';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import {MatSort, Sort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Algoritmo } from '../../../../shared//models/algoritmos/algoritmo.model';
import { MatDialog } from '@angular/material/dialog';
import { DetalhesSubmissaoComponent } from '../detalhes-submissao/detalhes-submissao.component';

const ELEMENT_DATA: SubmissaoModel[] = [
  
];

@Component({
  selector: 'app-grid-submissoes',
  templateUrl: './grid-submissoes.component.html',
  styleUrls: ['./grid-submissoes.component.scss']
})



export class GridSubmissoesComponent implements OnInit {

  
  displayedColumns: string[] = ['turma', 'atividade', 'linguagem', 'data', 'porcentagemPublica', 'porcentagemPrivada', 'status', 'detalhes'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor(
    private _liveAnnouncer: LiveAnnouncer,
    public dialog: MatDialog,
    ) {}

  ngOnInit() {
  }

  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  abrirModalDetalhamento(){
    return this.dialog.open(DetalhesSubmissaoComponent, {
      width: '1024px',

      disableClose: true,
      position: { 
        top: '100px',
      },
      data: {
        
      },
    });
  }

}
