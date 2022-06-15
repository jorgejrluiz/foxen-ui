import { AtividadeModel } from "./atividade.model";

export class Atividades {
    public static lista: AtividadeModel[] = [
        {idAtividade:1, descricao:'TP1: Palindromo', linguagem:['Java', 'C++'], status:'Inativo',turma:'Algoritmos e estrutura de dados II', idTurma:1, dataLimite:'01/03/2022'},
        {idAtividade:2, descricao:'TP2: Ordenação por inserção', linguagem:['Java', 'C++'], status:'Ativo',turma:'Algoritmos e estrutura de dados II', idTurma:1, dataLimite:'22/06/2022'},
        {idAtividade:3, descricao:'TP2: Ordenação por seleção', linguagem:['Java', 'C++'], status:'Ativo',turma:'Algoritmos e estrutura de dados II',idTurma:1, dataLimite:'22/06/2022'},
        {idAtividade:4, descricao:'TP2: Ordenação por quicksort', linguagem:['Java', 'C++'], status:'Ativo',turma:'Algoritmos e estrutura de dados II', idTurma:1, dataLimite:'22/06/2022'},
        {idAtividade:5, descricao:'TP2: Ordenação por bublesort', linguagem:['Java', 'C++'], status:'Ativo',turma:'Algoritmos e estrutura de dados II', idTurma:1, dataLimite:'22/06/2022'},
      ]
}