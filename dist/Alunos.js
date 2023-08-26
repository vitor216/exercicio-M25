"use strict";

var Alunos = ['NICOLAS', 'ANA'];
var Alunos2 = Alunos.map(function (itemAtual) {
  itemAtual = {
    Nome: itemAtual,
    Turma: '5º Ano',
    Media: 10.0
  };
  return itemAtual;
});
var ANA = Alunos2.find(function (item) {
  return item.Nome == 'ANA';
});
var IndiceDaANA = Alunos2.findIndex(function (item) {
  return item.Nome == 'ANA';
});
var TOASDQA = Alunos2.every(function (item) {
  return item.Turma === '5º Ano';
});
Alunos2.push({
  Nome: 'VITOR',
  Turma: '5º Ano',
  Media: 5.5
});
Alunos2.push({
  Nome: 'CARLA',
  Turma: '5º Ano',
  Media: 9.5
});
Alunos2.push({
  Nome: 'NAIRA',
  Turma: '5º Ano',
  Media: 5.0
});
Alunos2.push({
  Nome: 'MELISSA',
  Turma: '6º Ano',
  Media: 8.0
});
var EAADSA = Alunos2.some(function (item) {
  return item.Turma === '6º Ano';
});
var AlunosAprovados = Alunos2.filter(function (item) {
  return item.Media >= 6;
});
var NotasDoNICOLAS = [10, 10, 10, 10];
var soma = NotasDoNICOLAS.reduce(function (acumulador, itemAtual) {
  acumulador += itemAtual;
  return acumulador;
}, 0);
var NotasDaANA = [10, 10, 10, 10];
var soma1 = NotasDaANA.reduce(function (acumulador, itemAtual) {
  acumulador += itemAtual;
  return acumulador;
}, 0);
var NotasDoVITOR = [6, 5, 6, 5];
var soma2 = NotasDoVITOR.reduce(function (acumulador, itemAtual) {
  acumulador += itemAtual;
  return acumulador;
}, 0);
var NotasDaCARLA = [10, 9, 10, 9];
var soma3 = NotasDaCARLA.reduce(function (acumulador, itemAtual) {
  acumulador += itemAtual;
  return acumulador;
}, 0);
var NotasDaNAIRA = [4, 5, 6, 5];
var soma4 = NotasDaNAIRA.reduce(function (acumulador, itemAtual) {
  acumulador += itemAtual;
  return acumulador;
}, 0);
var NotasDaMELISSA = [9, 8, 8, 7];
var soma5 = NotasDaMELISSA.reduce(function (acumulador, itemAtual) {
  acumulador += itemAtual;
  return acumulador;
}, 0);
var FiltrarAlunosdo6Ano = function FiltrarAlunosdo6Ano(Alunos) {
  return Alunos.Turma === '6º Ano';
};
console.log(Alunos2);
console.log(ANA);
console.log(IndiceDaANA);
console.log(TOASDQA);
console.log(EAADSA);
console.log(AlunosAprovados);
console.log(soma);
console.log(soma1);
console.log(soma2);
console.log(soma3);
console.log(soma4);
console.log(soma5);