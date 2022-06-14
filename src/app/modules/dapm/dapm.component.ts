import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Algoritmo } from 'src/app/shared/models/algoritmos/algoritmo.model';
import { DetalhamentoAlgoritmoComponent } from './components/detalhamento-algoritmo/detalhamento-algoritmo.component';

@Component({
  selector: 'app-dapm',
  templateUrl: './dapm.component.html',
  styleUrls: ['./dapm.component.scss']
})


export class DapmComponent implements OnInit {

  formGroup: FormGroup = this.formBuilder.group({
    categoria: new FormControl(),
    complexidade: new FormControl(null),
    autor: new FormControl(null),
    linguagem: new FormControl(null),
    status: new FormControl(null)
  });

  algoritmos: Algoritmo[];  

  formGroupDetalhamento: FormGroup = this.formBuilder.group({
    categoria: new FormControl(),
    descricao: new FormControl(null),
    complexidade: new FormControl(null),
    status: new FormControl(null),
    linguagem: new FormControl(null),
    autor: new FormControl(null),
    codigo: new FormControl(null),
  });

  displayedColumns: string[] = ['descricao', 'complexidade', 'linguagem', 'status', 'algoritmo', 'detalhes'];
  dataSource = new MatTableDataSource<Algoritmo>([]);

  constructor(
    private formBuilder: FormBuilder,
    private _liveAnnouncer: LiveAnnouncer,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.algoritmos = [
      {idAlgoritmo: 1, complexidade: 'O(n²)', descricao: 'Algoritmo de ordenação por inserção', linguagem: 'Java', status: 'Aprovado', algoritmo: 'public static void insertionSort(int[] array) { \n \t // variavel temp \n\tint elementoAtual;\n\t// loop ate o ultimo elemento\n\tfor (int i = 0; i < array.length; i++) {\n\t// guarda o valor\n\t\t elementoAtual = array[i];\n\t\t // inicializa a variavel localização\n \t\t int indiceAtual = i; \n\n\t\t while (indiceAtual > 0 && array[indiceAtual - 1] > elementoAtual) {\n \t\t\t array[indiceAtual] = array[indiceAtual - 1];\n\t\t\t\t indiceAtual--;\n\t\t}\n\t\t\t  array[indiceAtual] = elementoAtual; \n \t\t\timprimir(array);\n\t\t}\n\t}\n'},
      {idAlgoritmo: 2, complexidade: 'O(n²)', descricao: 'Algoritmo de ordenação por inserção', linguagem: 'C++', status: 'Aprovado', algoritmo: 'void insertionsort(int[] vetor) { int j; int key; int i; for (j = 1; j < vetor.length; j++) { key = vetor[j]; for (i = j - 1; (i >= 0) && (vetor[i] > key); i--) { vetor[i + 1] = vetor[i]; } vetor[i + 1] = key; } }'},
    ];

    this.inicializarDataSource();
  }



  addItem(algoritmo: Algoritmo) {
    debugger;
    algoritmo.status = 'Em análise';
    algoritmo.idAlgoritmo = this.algoritmos.length;
    algoritmo.idAlgoritmo = algoritmo.idAlgoritmo +1;
    this.algoritmos.push(algoritmo);
    console.log(this.algoritmos);
    this.inicializarDataSource();
  }

  inicializarDataSource() {       
    this.dataSource = new MatTableDataSource(this.algoritmos);
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  abrirModalDetalhamento(algoritmo: Algoritmo) {

    return this.dialog.open(DetalhamentoAlgoritmoComponent, {
      width: '1024px',
      disableClose: true,
      position: { 
        top: '100px',
      },
      data: {
        algoritmo: algoritmo
      },
    });
  }

}
