const Alunos =['NICOLAS','ANA'];
const Alunos2 = Alunos.map(function(itemAtual) {
    itemAtual ={
        Nome: itemAtual,
        Turma: '5º Ano',
        Media: 10.0
    }
    return itemAtual;
})

const ANA = Alunos2.find(function(item) {
    return item.Nome == 'ANA';
})

const IndiceDaANA = Alunos2.findIndex (function(item) {
    return item.Nome == 'ANA';
})

const TOASDQA = Alunos2.every(function(item) {
    return item.Turma ==='5º Ano';
})

Alunos2.push({
    Nome: 'VITOR',
    Turma: '5º Ano',
    Media: 5.5
})

Alunos2.push({
    Nome: 'CARLA',
    Turma: '5º Ano',
    Media: 9.5
})

Alunos2.push({
    Nome: 'NAIRA',
    Turma: '5º Ano',
    Media: 5.0
})

Alunos2.push({
    Nome: 'MELISSA',
    Turma: '6º Ano',
    Media: 8.0
})

const EAADSA = Alunos2.some(function(item) {
    return item.Turma ==='6º Ano';
})

const AlunosAprovados = Alunos2.filter(function(item) {
    return item.Media >= 6;
})

const NotasDoNICOLAS =[10, 10, 10, 10];
const soma = NotasDoNICOLAS.reduce(function(acumulador,itemAtual) {
acumulador += itemAtual;
return acumulador;
},0)
const NotasDaANA =[10, 10, 10, 10];
const soma1 = NotasDaANA.reduce(function(acumulador,itemAtual) {
acumulador += itemAtual;
return acumulador;
},0)
const NotasDoVITOR =[6, 5, 6, 5];
const soma2 = NotasDoVITOR.reduce(function(acumulador,itemAtual) {
acumulador += itemAtual;
return acumulador;
},0)
const NotasDaCARLA =[10, 9, 10, 9];
const soma3 = NotasDaCARLA.reduce(function(acumulador,itemAtual) {
acumulador += itemAtual;
return acumulador;
},0)
const NotasDaNAIRA =[4, 5, 6, 5];
const soma4 = NotasDaNAIRA.reduce(function(acumulador,itemAtual) {
acumulador += itemAtual;
return acumulador;
},0)
const NotasDaMELISSA =[9, 8, 8, 7];
const soma5 = NotasDaMELISSA.reduce(function(acumulador,itemAtual) {
acumulador += itemAtual;
return acumulador;
},0)

const FiltrarAlunosdo6Ano = (Alunos) => Alunos.Turma ==='6º Ano';
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