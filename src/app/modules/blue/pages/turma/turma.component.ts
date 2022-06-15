import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { TurmaModel } from 'src/app/shared/models/blue/turma.model';
import {MatSnackBar} from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { InclusaoTurmaComponent } from '../../components/inclusao-turma/inclusao-turma.component';
import { AlunoModel } from 'src/app/shared/models/blue/aluno.model';

@Component({
  selector: 'app-turma',
  templateUrl: './turma.component.html',
  styleUrls: ['./turma.component.scss']
})
export class TurmaComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private _snackBar: MatSnackBar,
    public dialog: MatDialog
    ) { }

  ngOnInit() {
    this.turmas = [
      {idTurma: 1,nomeTurma: 'Algoritmos e estrutura de dados II', alunos:[ {matricula: 1, nome: 'Jorge'}, {matricula: 2, nome: 'Bruna'}, {matricula: 3, nome: 'João'}, {matricula: 4, nome: 'Paulo'}], alunosSolicitacao: [{matricula: 553274, nome:'Tony Stark'}, {matricula: 553275, nome:'Steve Rogers'}, {matricula: 553276, nome:'Bruce Banner'}, {matricula: 553277, nome:'Scott Lang'}], monitores:['Paulo', ' Monica'], professores: ['Felipe', 'Max'], alunosNome: 'Jorge, Bruna, João, Paulo'},
      {idTurma: 2,nomeTurma: 'Laboratorio de projeto e algoritmos', alunos:[{matricula: 1, nome: 'Jorge'}, {matricula: 2, nome: 'Bruna'}, {matricula: 3, nome: 'João'}, {matricula: 4, nome: 'Paulo'}], alunosSolicitacao: [{matricula: 553274, nome:'Tony Stark'}, {matricula: 553275, nome:'Steve Rogers'}, {matricula: 553276, nome:'Bruce Banner'}, {matricula: 553277, nome:'Scott Lang'}], monitores:['Paulo', ' Monica'], professores: ['Felipe'], alunosNome: 'Jorge,  Bruna, João, Paulo'},
      {idTurma: 3,nomeTurma: 'Compiladores', alunos:[{matricula: 1, nome: 'Jorge'}, {matricula: 2, nome: 'Bruna'}, {matricula: 3, nome: 'João'}, {matricula: 4, nome: 'Paulo'}], alunosSolicitacao: [{matricula: 553274, nome:'Tony Stark'}, {matricula: 553275, nome:'Steve Rogers'}, {matricula: 553276, nome:'Bruce Banner'}, {matricula: 553277, nome:'Scott Lang'}], monitores:['Paulo', 'Monica'], professores: ['Alexei'], alunosNome: 'Jorge, Bruna, João, Paulo'}
    ];
    this.inicializarDataSource();
  }

  perfil = 'Professor'

  formGroup: FormGroup = this.formBuilder.group({
    turma: new FormControl(),
    professor: new FormControl(null),
  });

  turmas: TurmaModel[];  
  //alunosSolicitacao: AlunoModel[];

  displayedColumns: string[] = ['Turma', 'Professores', 'Alunos', 'Monitores', 'detalhes'];
  dataSource = new MatTableDataSource<TurmaModel>([]);

  inicializarDataSource() {       
    this.dataSource = new MatTableDataSource(this.turmas);
  }

  solicitarInclusao(turma:TurmaModel ){
    this._snackBar.open('Solicitação para '+ turma.nomeTurma+ ' enviada com sucesso!', 'Fechar', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      panelClass: ['snackbar']
    });
  }

  abrirModalDetalhamento(turma: TurmaModel) {
    const dialogRef = this.dialog.open(InclusaoTurmaComponent, {
      width: '1024px',
      disableClose: true,
      position: { 
        top: '100px',
      },
      data: {
        alunosTurma: turma.alunos,
        alunosSolicitacao: turma.alunosSolicitacao,
        idTurma: turma.idTurma
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      this.turmas.forEach(element => {
        if(element.idTurma == result.idTurma){
          element.alunos = result.alunos;
          let alunos: string = '';
          result.alunos.forEach(it => {
            if(alunos==='')
              alunos = it.nome
            else
              alunos = alunos + ', ' + it.nome
          });
          element.alunosNome = alunos;
        }
      });
      console.log(this.turmas)
    });
  }
}
