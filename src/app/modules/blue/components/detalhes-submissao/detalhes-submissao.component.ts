import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { Component, Inject, NgZone, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AtividadeModel } from 'src/app/shared/models/blue/atividade.model';
import { Atividades } from 'src/app/shared/models/blue/lista-atividades';

@Component({
  selector: 'app-detalhes-submissao',
  templateUrl: './detalhes-submissao.component.html',
  styleUrls: ['./detalhes-submissao.component.scss']
})
export class DetalhesSubmissaoComponent implements OnInit{

  linguagens: string[] = [ 'Java', 'C','C++','Python','Kotlin','Golang'];
  atividades: AtividadeModel[] = Atividades.lista
  turmasDisponiveis: string[] = ['Algoritmos e estrutura de dados II', 'Compiladores'];
  atividadesDisponiveis:string[] = ['TP1: Palindromo','TP2: Ordenação por inserção', 'TP2: Ordenação por seleção' ,'TP2: Ordenação por quicksort' ,'TP2: Ordenação por bublesort' ,'Analisador Lexico' ,'Analisador Sintatico'];
  textoBotao = 'Submeter';

  formGroup: FormGroup = this.formBuilder.group({
    turma: new FormControl(null),
    atividade: new FormControl(null),
    linguagem: new FormControl(null),
    data: new FormControl(null),
    porcentagemPublica: new FormControl(null),
    porcentagemPrivada: new FormControl(null),
    erros: new FormControl(null),
    entradaPublica: new FormControl(null),
    saidaPublica: new FormControl(null),
    resultado: new FormControl(null),
    acceptfile: new FormControl(null)
  });

  @ViewChild('autosize') autosize: CdkTextareaAutosize;

  visualizacao: boolean = false;
  
  constructor(
    private formBuilder: FormBuilder,
    private _ngZone: NgZone,
    public dialogRef: MatDialogRef<DetalhesSubmissaoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.visualizacao = this.data.visualizacao.toLowerCase() == 'true' ? true : false;
    if(this.visualizacao){
      this.textoBotao = 'Ok';
      this.setarCamposAlgoritmo();
    } else {
      this.atividades.forEach(element => {
        if(!this.turmasDisponiveis.includes(element.turma)){
          this.turmasDisponiveis.push(element.turma)
        }
        if(!this.atividadesDisponiveis.includes(element.descricao)){
          this.atividadesDisponiveis.push(element.descricao)
        }
      });
  
      this.formGroup.controls['turma'].valueChanges.subscribe(it => {
        this.atividadesDisponiveis = [];
        this.atividades.forEach(element => {
          if(this.formGroup.controls['turma'].value == element.turma){
            this.atividadesDisponiveis.push(element.descricao)
          }
        });
      });
  
      this.formGroup.controls['atividade'].valueChanges.subscribe(it => {
        this.linguagens = [];
        this.atividades.forEach(element => {
          if(this.formGroup.controls['atividade'].value == element.descricao){
            this.linguagens = element.linguagem
          }
        });
      });
    }   
  }

  setarCamposAlgoritmo(){
    this.formGroup.controls['turma'].setValue(this.data.submissao.turma);
    this.formGroup.controls['atividade'].setValue(this.data.submissao.atividade);
    this.formGroup.controls['linguagem'].setValue(this.data.submissao.linguagem);
    this.formGroup.controls['data'].setValue(this.data.submissao.data);
    this.formGroup.controls['erros'].setValue(this.data.submissao.erros.join(' ,'));
    this.formGroup.controls['porcentagemPublica'].setValue(this.data.submissao.porcentagemPublica+'%');  
    this.formGroup.controls['porcentagemPrivada'].setValue(this.data.submissao.porcentagemPrivada+'%');
    if(this.data.submissao.erros.length == 0){
      this.formGroup.controls['entradaPublica'].setValue("2\n5\n7\n9\n1\n3\n6\n4\n8");
      this.formGroup.controls['resultado'].setValue("1\n2\n3\n4\n5\n6\n7\n8\n9");
    }
    
    this.formGroup.markAllAsTouched();
  }

  onNoClick() {
    if(this.visualizacao)
      this.dialogRef.close();
    else
      this.dialogRef.close(this.formGroup.value);
  }

}

