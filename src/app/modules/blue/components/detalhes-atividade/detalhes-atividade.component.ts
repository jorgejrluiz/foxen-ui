import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-detalhes-atividade',
  templateUrl: './detalhes-atividade.component.html',
  styleUrls: ['./detalhes-atividade.component.scss']
})
export class DetalhesAtividadeComponent implements OnInit {

  public files: File[] = [];
  multiple: boolean = true;

  formGroup: FormGroup = this.formBuilder.group({
    atividade: new FormControl(null),
    linguagem: new FormControl(null),
    data: new FormControl(null),
    acceptfile: new FormControl(this.files),
    entradaPrivada: new FormControl(null),
  });

  @ViewChild('autosize') autosize: CdkTextareaAutosize;

  
  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<DetalhesAtividadeComponent>
    ){ }

  ngOnInit() {
  }

  linguagens: string[] = [ 'Java', 'C','C++','Python','Kotlin','Golang'];

  cadastrar(){
    //this.dialogRef.close(this.formGroup.value);
  }

  @ViewChild('UploadFileButton') uploadFileInput: ElementRef;
  myfilename = 'Select File';


  onClose(){
    this.dialogRef.close(this.formGroup.value);
  }
}
