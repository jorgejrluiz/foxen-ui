import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { Component, Inject, Input, NgZone, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSelect } from '@angular/material/select';
import { take } from 'rxjs';
import { Algoritmo } from '../../../../shared/models/algoritmos/algoritmo.model';

@Component({
  selector: 'app-detalhamento-algoritmo',
  templateUrl: './detalhamento-algoritmo.component.html',
  styleUrls: ['./detalhamento-algoritmo.component.scss']
})
export class DetalhamentoAlgoritmoComponent implements OnInit {

  formGroup: FormGroup = this.formBuilder.group({
    categoria: new FormControl(null),
    descricao: new FormControl(null),
    complexidade: new FormControl(null),
    linguagem: new FormControl(null),
    autor: new FormControl(null),
    algoritmo: new FormControl(null),
  });

  textoBotao: string = 'Cadastrar';

  codigo: string = 'public static void insertionSort(int[] array) { \n \t // variavel temp \n\tint elementoAtual;\n\t// loop ate o ultimo elemento\n\tfor (int i = 0; i < array.length; i++) {\n\t// guarda o valor\n\t\t elementoAtual = array[i];\n\t\t // inicializa a variavel localização\n \t\t int indiceAtual = i; \n\n\t\t while (indiceAtual > 0 && array[indiceAtual - 1] > elementoAtual) {\n \t\t\t array[indiceAtual] = array[indiceAtual - 1];\n\t\t\t\t indiceAtual--;\n\t\t}\n\t\t\t  array[indiceAtual] = elementoAtual; \n \t\t\timprimir(array);\n\t\t}\n\t}\n'

  categoriasAlgoritmo: string[] = ['Algoritmo de ordenação', 'Inteligencia artificial', 'Hello World'];


  constructor(
    private formBuilder: FormBuilder,
    private _ngZone: NgZone,
    public dialogRef: MatDialogRef<DetalhamentoAlgoritmoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }
  
  @ViewChild('autosize') autosize: CdkTextareaAutosize;
  @ViewChild('formField-Categoria') public categoria: MatSelect;

  ngOnInit() {
    if(this.data.algoritmo){
      this.textoBotao = 'Fechar';
      this.setarCamposAlgoritmo();
      this.triggerResize();
    }
  }
   

  setarCamposAlgoritmo(){
    this.formGroup.controls['categoria'].setValue(this.data.algoritmo.categoria);
    this.formGroup.controls['descricao'].setValue(this.data.algoritmo.descricao);
    this.formGroup.controls['complexidade'].setValue(this.data.algoritmo.complexidade);
    this.formGroup.controls['linguagem'].setValue(this.data.algoritmo.linguagem);
    this.formGroup.controls['autor'].setValue("Jorge Luiz Mendes Moreira Junior");  
    let algoritmo = this.data.algoritmo.algoritmo
    this.formGroup.controls['algoritmo'].setValue(algoritmo);
    this.formGroup.markAllAsTouched();
  }

  triggerResize() {
    // Wait for changes to be applied, then trigger textarea resize.
    this._ngZone.onStable.pipe(take(1)).subscribe(() => this.autosize.resizeToFitContent(true));
  }

  onNoClick(){
    console.log(this.formGroup.value);
    this.dialogRef.close(this.formGroup.value);
  }

}