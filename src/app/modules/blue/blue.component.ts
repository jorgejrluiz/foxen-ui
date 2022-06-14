import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-blue',
  templateUrl: './blue.component.html',
  styleUrls: ['./blue.component.scss']
})
export class BlueComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
  }

  formGroup: FormGroup = this.formBuilder.group({
    turma: new FormControl(),
    atividade: new FormControl(null),
    linguagem: new FormControl(null),
    data: new FormControl(null),
    status: new FormControl(null),
  });


}
