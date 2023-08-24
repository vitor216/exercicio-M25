function Alunos (Nome, Turma, PrimeiraNota, SegundaNota, TerceiraNota, QuartaNota, MediadoAluno){
    this.nome = Nome
    this.turma = Turma
    this.nota1 = PrimeiraNota
    this.nota2 = SegundaNota
    this.nota3 = TerceiraNota
    this.nota4 = QuartaNota
    this.media = MediadoAluno
}

const Aluno1 = new Alunos("Nicolas", "5º Ano", 10, 10, 10, 10, 10);
const Aluno2 = new Alunos("Ana", "5º Ano", 10, 9, 8, 8, 8.7);
const Aluno3 = new Alunos("Vitor", "5º Ano", 6, 6, 7, 4, 5.7);
const Aluno4 = new Alunos("Carla", "5º Ano", 9, 8, 7, 7, 7.7);
const Aluno5 = new Alunos("Naira", "5º Ano", 6, 6, 5, 4, 5.2);

let total1 = 0;
let total2 = 0;
let total3 = 0;
let total4 = 0;
let total5 = 0;

let total11 = 0;
let total22 = 0;
let total33 = 0;
let total44 = 0;
let total55 = 0;

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

const ABC = Alunos.filter(function(item){
    return item.media >= 6;
})

somar();
console.log(total1);
console.log(total2);
console.log(total3);
console.log(total4);
console.log(total5);

Media();
console.log("A media do Aluno "+Aluno1.nome+" é igual a "+total11);
console.log("A media do Aluno "+Aluno2.nome+" é igual a "+total22);
console.log("A media do Aluno "+Aluno3.nome+" é igual a "+total33);
console.log("A media do Aluno "+Aluno4.nome+" é igual a "+total44);
console.log("A media do Aluno "+Aluno5.nome+" é igual a "+total55);

EnserirAlunosAprovados();
console.log(AlunosAprovados);

console.log(ABC);