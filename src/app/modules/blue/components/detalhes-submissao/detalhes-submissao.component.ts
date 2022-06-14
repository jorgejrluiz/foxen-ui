import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { Component, Inject, NgZone, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-detalhes-submissao',
  templateUrl: './detalhes-submissao.component.html',
  styleUrls: ['./detalhes-submissao.component.scss']
})
export class DetalhesSubmissaoComponent implements OnInit {

  formGroup: FormGroup = this.formBuilder.group({
    turma: new FormControl(null),
    atividade: new FormControl(null),
    linguagem: new FormControl(null),
    data: new FormControl(null),
    porcentagemPublica: new FormControl(null),
    porcentagemPrivada: new FormControl(null),
    erros: new FormControl(null),
    entradaPublica: new FormControl(null),
    resultado: new FormControl(null),
  });

  @ViewChild('autosize') autosize: CdkTextareaAutosize;

  
  constructor(
    private formBuilder: FormBuilder,
    private _ngZone: NgZone,
    public dialogRef: MatDialogRef<DetalhesSubmissaoComponent>
  ) { }

  ngOnInit() {
    this.setarCamposAlgoritmo();
  }

  setarCamposAlgoritmo(){
    this.formGroup.controls['turma'].setValue("Algoritmo e estrutura de dados II");
    this.formGroup.controls['atividade'].setValue("Algoritmo de ordenação por inserção");
    this.formGroup.controls['linguagem'].setValue("Java");
    this.formGroup.controls['data'].setValue("15/05/2022");
    this.formGroup.controls['porcentagemPublica'].setValue("100%");  
    this.formGroup.controls['porcentagemPrivada'].setValue("100%");
    this.formGroup.controls['entradaPublica'].setValue("2\n5\n7\n9\n1\n3\n6\n4\n8");
    this.formGroup.controls['resultado'].setValue("1\n2\n3\n4\n5\n6\n7\n8\n9");
    this.formGroup.markAllAsTouched();
  }

  onNoClick(){
    this.dialogRef.close();
  }

}

