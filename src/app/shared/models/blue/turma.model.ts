import { AlunoModel } from "./aluno.model";

export class TurmaModel {
    idTurma: number;
    nomeTurma: string;
    professores: string[];
    alunos: AlunoModel[];
    alunosSolicitacao: AlunoModel[];
    alunosNome: string;
    monitores: string[];
}