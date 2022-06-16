import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { SubmissaoModel } from 'src/app/shared/models/blue/submissao.model';
import { DetalhesSubmissaoComponent } from '../detalhes-submissao/detalhes-submissao.component';

@Component({
  selector: 'app-filtro-submissoes',
  templateUrl: './filtro-submissoes.component.html',
  styleUrls: ['./filtro-submissoes.component.scss']
})
export class FiltroSubmissoesComponent implements OnInit {

  @Input() formGroup: FormGroup;
  @Output() novaSubmissao = new EventEmitter<SubmissaoModel>();
  tipoPerfil: string = 'aluno'
  
  constructor(
    private formBuilder: FormBuilder,
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
  }

  abrirModalDetalhamento() {
    const dialogRef = this.dialog.open(DetalhesSubmissaoComponent, {
      width: '1024px',
      disableClose: true,
      position: { 
        top: '100px',
      },
      data: {
        visualizacao:'false',
      },
    });
    //{resultado:'teste', idSubmissao: 2, turma: 'Algoritmos e estrutura de dados II', atividade: 'TP2: Ordenação por inserção', linguagem: 'Java', data: '08/05/2022 21:30', porcentagemPublica: '100', porcentagemPrivada: '100', status: 'Corrigido', erros: []},
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      let novaSubmissao:SubmissaoModel = {
        atividade: result.atividade,
        data: new Date().toLocaleDateString() + ' ' +  new Date().toLocaleTimeString(),
        erros: [],
        idSubmissao: 2, 
        turma: result.turma,
        linguagem: result.linguagem,
        porcentagemPublica: '100',
        porcentagemPrivada: '100',
        status: 'Corrigido',
        resultado: '1,2,3,4,5,6,7,8,9'
      }
      this.novaSubmissao.emit(novaSubmissao);
    });
  }

}
