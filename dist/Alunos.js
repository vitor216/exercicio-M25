"use strict";

function Alunos(Nome, Turma, PrimeiraNota, SegundaNota, TerceiraNota, QuartaNota, MediadoAluno) {
  this.nome = Nome;
  this.turma = Turma;
  this.nota1 = PrimeiraNota;
  this.nota2 = SegundaNota;
  this.nota3 = TerceiraNota;
  this.nota4 = QuartaNota;
  this.media = MediadoAluno;
}
var Aluno1 = new Alunos("Nicolas", "5º Ano", 10, 10, 10, 10, 10);
var Aluno2 = new Alunos("Ana", "5º Ano", 10, 9, 8, 8, 8.7);
var Aluno3 = new Alunos("Vitor", "5º Ano", 6, 6, 7, 4, 5.7);
var Aluno4 = new Alunos("Carla", "5º Ano", 9, 8, 7, 7, 7.7);
var Aluno5 = new Alunos("Naira", "5º Ano", 6, 6, 5, 4, 5.2);
var total1 = 0;
var total2 = 0;
var total3 = 0;
var total4 = 0;
var total5 = 0;
var total11 = 0;
var total22 = 0;
var total33 = 0;
var total44 = 0;
var total55 = 0;
var AlunosAprovados = [];
function somar() {
  total1 = Aluno1.nota1 + Aluno1.nota2 + Aluno1.nota3 + Aluno1.nota4;
  total2 = Aluno2.nota1 + Aluno2.nota2 + Aluno2.nota3 + Aluno2.nota4;
  total3 = Aluno3.nota1 + Aluno3.nota2 + Aluno3.nota3 + Aluno3.nota4;
  total4 = Aluno4.nota1 + Aluno4.nota2 + Aluno4.nota3 + Aluno4.nota4;
  total5 = Aluno5.nota1 + Aluno5.nota2 + Aluno5.nota3 + Aluno5.nota4;
}
function Media() {
  total11 = total1 / 4;
  total22 = total2 / 4;
  total33 = total3 / 4;
  total44 = total4 / 4;
  total55 = total5 / 4;
}
function EnserirAlunosAprovados() {
  if (total11 >= 6) {
    AlunosAprovados.push(Aluno1.nome);
  } else {}
  if (total22 >= 6) {
    AlunosAprovados.push(Aluno2.nome);
  } else {}
  if (total33 >= 6) {
    AlunosAprovados.push(Aluno3.nome);
  } else {}
  if (total44 >= 6) {
    AlunosAprovados.push(Aluno4.nome);
  } else {}
  if (total55 >= 6) {
    AlunosAprovados.push(Aluno5.nome);
  } else {}
}
somar();
console.log(total1);
console.log(total2);
console.log(total3);
console.log(total4);
console.log(total5);
Media();
console.log("A media do Aluno " + Aluno1.nome + " é igual a " + total11);
console.log("A media do Aluno " + Aluno2.nome + " é igual a " + total22);
console.log("A media do Aluno " + Aluno3.nome + " é igual a " + total33);
console.log("A media do Aluno " + Aluno4.nome + " é igual a " + total44);
console.log("A media do Aluno " + Aluno5.nome + " é igual a " + total55);
EnserirAlunosAprovados();
console.log(AlunosAprovados);