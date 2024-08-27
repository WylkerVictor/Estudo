interface FuncionarioInterface {
    nome: string;
    cargo: string;
    salario: number;
    horasTrabalhadas: number;
}

class Funcionario implements FuncionarioInterface {
    nome: string;
    cargo: string;
    salario: number;
    horasTrabalhadas: number;

constructor(nome: string, cargo: string, salario: number, horasTrabalhadas: number) {
    this.nome = nome;
    this.cargo = cargo;
    this.salario = salario;
    this.horasTrabalhadas = horasTrabalhadas 
  }   

calcularPagamento(): string {
    return `Nome: ${this.nome} Cargo: ${this.cargo} Salario: ${this.salario * this.horasTrabalhadas} Horas trabalhadas: ${this.horasTrabalhadas}`;
  }
}
const funcionario1 = new Funcionario("Roberto", "Adm", 120, 6);
const funcionario2 = new Funcionario("Junior", "Dev", 120, 7);

console.log(funcionario1.calcularPagamento(), "\n" funcionario2.calcularPagamento());
