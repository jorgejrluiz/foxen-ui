import { SelectionModel } from '@angular/cdk/collections';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AlunoModel } from 'src/app/shared/models/blue/aluno.model';

@Component({
  selector: 'app-inclusao-turma',
  templateUrl: './inclusao-turma.component.html',
  styleUrls: ['./inclusao-turma.component.scss']
})
export class InclusaoTurmaComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort;
  alunosTurma: AlunoModel[] = [];  
  alunosSolicitacaoTurma: AlunoModel[] = [];  

  displayedColumnsSolicitacoes: string[] = [ 'matricula', 'nome','detalhes'];
  displayedColumns: string[] = [ 'matricula', 'nome'];
  dataSourceSolicitacoes = new MatTableDataSource<AlunoModel>([]);
  dataSourceAlunos = new MatTableDataSource<AlunoModel>([]);
  selection = new SelectionModel<AlunoModel>(true, []);

  constructor(
    public dialogRef: MatDialogRef<InclusaoTurmaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    console.log(this.data)
    this.alunosSolicitacaoTurma = this.data.alunosSolicitacao;
    this.alunosTurma = this.data.alunosTurma;
    this.inicializarDataSource();
  }

  inicializarDataSource() {       
    this.dataSourceSolicitacoes = new MatTableDataSource(this.alunosSolicitacaoTurma);
    this.dataSourceAlunos = new MatTableDataSource(this.alunosTurma);
  }

  aprovarSolicitacao(aluno: AlunoModel){
    let teste = this.alunosSolicitacaoTurma.indexOf(aluno)
    let alunoAprovado = this.alunosSolicitacaoTurma.splice(teste,1);
    this.alunosTurma.push(... alunoAprovado);
    this.inicializarDataSource();
  }

  onClose(){
    this.dialogRef.close({alunos:this.alunosTurma, idTurma: this.data.idTurma});
  }

}
