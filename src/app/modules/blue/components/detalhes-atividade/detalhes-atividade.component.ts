import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-detalhes-atividade',
  templateUrl: './detalhes-atividade.component.html',
  styleUrls: ['./detalhes-atividade.component.scss']
})
export class DetalhesAtividadeComponent implements OnInit {

  formGroup: FormGroup = this.formBuilder.group({
    atividade: new FormControl(null),
    linguagem: new FormControl(null),
    data: new FormControl(null),
    entradaPublica: new FormControl(null),
    entradaPrivada: new FormControl(null),
  });

  @ViewChild('autosize') autosize: CdkTextareaAutosize;

  
  constructor(
    private formBuilder: FormBuilder    //public dialogRef: MatDialogRef<DetalhesAtividadeComponent>
    ){ }

  ngOnInit() {
  }

  linguagens: string[] = [ 'Java', 'C','C++','Python','Kotlin','Golang'];

  cadastrar(){
    //this.dialogRef.close(this.formGroup.value);
  }

  @ViewChild('UploadFileInput') uploadFileInput: ElementRef;
  myfilename = 'Select File';


  fileChangeEvent(fileInput: any) {

    if (fileInput.target.files && fileInput.target.files[0]) {

      let files: File[] = Array.from(fileInput.target.files);

      this.myfilename = '';
      debugger
      files.forEach((file: File) => {
        console.log(file);
        this.myfilename += file.name + ',';
      });

      const reader = new FileReader();
      reader.onload = (e: any) => {
        const image = new Image();
        image.src = e.target.result;
        image.onload = rs => {

          // Return Base64 Data URL
          const imgBase64Path = e.target.result;

        };
      };
      reader.readAsDataURL(fileInput.target.files[0]);

      // Reset File Input to Selct Same file again
      this.uploadFileInput.nativeElement.value = "";
    } else {
      this.myfilename = 'Select File';
    }
  }
}
