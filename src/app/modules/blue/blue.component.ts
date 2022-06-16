import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SubmissaoModel } from 'src/app/shared/models/blue/submissao.model';
import { DetalhesSubmissaoComponent } from './components/detalhes-submissao/detalhes-submissao.component';

@Component({
  selector: 'app-blue',
  templateUrl: './blue.component.html',
  styleUrls: ['./blue.component.scss']
})

export class BlueComponent implements OnInit {
  
  submissoes: SubmissaoModel[] = [
    {resultado:'teste', idSubmissao: 1, turma: 'Algoritmos e estrutura de dados II', atividade: 'TP2: Ordenação por inserção', linguagem: 'Java', data: '08/05/2022 20:59', porcentagemPublica: '0', porcentagemPrivada: '0', status: 'Corrigido', erros: ['Error: Could not find or load main class Program Caused by: java.lang.ClassNotFoundException: Program']},
    {resultado:'teste', idSubmissao: 2, turma: 'Algoritmos e estrutura de dados II', atividade: 'TP2: Ordenação por inserção', linguagem: 'Java', data: '08/05/2022 21:30', porcentagemPublica: '100', porcentagemPrivada: '100', status: 'Corrigido', erros: []},
  ];
  displayedColumns: string[] = ['turma', 'atividade', 'linguagem', 'data', 'porcentagemPublica', 'porcentagemPrivada', 'status', 'detalhes'];
  dataSource = new MatTableDataSource<SubmissaoModel>();
  constructor(
    private formBuilder: FormBuilder,
    private _liveAnnouncer: LiveAnnouncer,
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
    this.inicializarDataSource();
  }

  inicializarDataSource() {       
    this.dataSource = new MatTableDataSource(this.submissoes);
  }

  formGroup: FormGroup = this.formBuilder.group({
    turma: new FormControl(),
    atividade: new FormControl(null),
    linguagem: new FormControl(null),
    data: new FormControl(null),
    status: new FormControl(null),
  });

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

  abrirModalDetalhamento(submissao: SubmissaoModel){
    return this.dialog.open(DetalhesSubmissaoComponent, {
      width: '1024px',

      disableClose: true,
      position: { 
        top: '100px',
      },
      data: {
        visualizacao:'true',
        submissao:submissao
      },
    });
  }

  novaSubmissao(submissao: SubmissaoModel){
    this.submissoes.push(submissao);
    console.log(this.submissoes);
    this.inicializarDataSource();
  }

}
