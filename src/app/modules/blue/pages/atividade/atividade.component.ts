import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { AtividadeModel } from 'src/app/shared/models/blue/atividade.model';
import { Atividades } from 'src/app/shared/models/blue/lista-atividades';
import { DetalhesAtividadeComponent } from '../../components/detalhes-atividade/detalhes-atividade.component';

@Component({
  selector: 'app-atividade',
  templateUrl: './atividade.component.html',
  styleUrls: ['./atividade.component.scss']
})
export class AtividadeComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private _snackBar: MatSnackBar,
    public dialog: MatDialog,
    private rota: ActivatedRoute,
  ) { }

  atividades: AtividadeModel[] = [];
  turma: number;
  /*[
    {idAtividade:1, descricao:'TP1: Palindromo', linguagem:['Java', 'C++'], status:'Inativo',turma:'Algoritmos e estrutura de dados II', dataLimite:'01/03/2022'},
    {idAtividade:2, descricao:'TP2: Ordenação por inserção', linguagem:['Java', 'C++'], status:'Ativo',turma:'Algoritmos e estrutura de dados II', dataLimite:'22/06/2022'},
    {idAtividade:3, descricao:'TP2: Ordenação por seleção', linguagem:['Java', 'C++'], status:'Ativo',turma:'Algoritmos e estrutura de dados II', dataLimite:'22/06/2022'},
    {idAtividade:4, descricao:'TP2: Ordenação por quicksort', linguagem:['Java', 'C++'], status:'Ativo',turma:'Algoritmos e estrutura de dados II', dataLimite:'22/06/2022'},
    {idAtividade:5, descricao:'TP2: Ordenação por bublesort', linguagem:['Java', 'C++'], status:'Ativo',turma:'Algoritmos e estrutura de dados II', dataLimite:'22/06/2022'},
  ]*/

  ngOnInit() {
    this.turma = this.rota.snapshot.params['idTurma'];
    this.atividades = Atividades.lista.filter(it => it.idTurma == this.turma);
    this.inicializarDataSource();
  }

  formGroup: FormGroup = this.formBuilder.group({
    turma: new FormControl(),
    atividade: new FormControl(null),
    linguagem: new FormControl(null),
    data: new FormControl(null),
    status: new FormControl(null),
  });

  displayedColumns: string[] = ['descricao', 'linguagem', 'dataLimite', 'status', 'detalhes'];
  dataSource = new MatTableDataSource<AtividadeModel>([]);

  inicializarDataSource() {       
    this.dataSource = new MatTableDataSource(this.atividades);
  }

  abrirModalDetalhamento() {
    const dialogRef = this.dialog.open(DetalhesAtividadeComponent, {
      width: '768px',
      height: 'auto',
      disableClose: false,
      panelClass: 'trend-dialog',
      position: { 
        top: '100px',
      },
      data: {
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      let atividade: AtividadeModel = {idAtividade:9,linguagem: result.linguagem.join(', '), descricao: result.atividade, status:'Ativo', turma: this.turma.toString(), dataLimite: result.data, idTurma:this.turma}
      this.atividades.push(atividade)
      this.inicializarDataSource();
    });
  }
}
