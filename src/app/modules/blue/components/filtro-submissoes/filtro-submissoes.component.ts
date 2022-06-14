import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-filtro-submissoes',
  templateUrl: './filtro-submissoes.component.html',
  styleUrls: ['./filtro-submissoes.component.scss']
})
export class FiltroSubmissoesComponent implements OnInit {

  @Input() formGroup: FormGroup;
  @Output() dadosParaRealizarFiltro = new EventEmitter<null>();
  tipoPerfil: string = 'aluno'
  
  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
  }

}
