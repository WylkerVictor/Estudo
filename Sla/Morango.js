var Funcionario = /** @class */ (function () {
    function Funcionario(nome, cargo, salario, horasTrabalhadas) {
        this.nome = nome;
        this.cargo = cargo;
        this.salario = salario;
        this.horasTrabalhadas = horasTrabalhadas;
    }
    Funcionario.prototype.calcularPagamento = function () {
        return "Nome: ".concat(this.nome, " Cargo: ").concat(this.cargo, " Salario: ").concat(this.salario * this.horasTrabalhadas, " Horas trabalhadas: ").concat(this.horasTrabalhadas);
    };
    return Funcionario;
}());
var funcionario1 = new Funcionario("Roberto", "Adm", 120, 6);
var funcionario2 = new Funcionario("Junior", "Dev", 120, 7);
console.log(funcionario1.calcularPagamento(), "\n", funcionario2.calcularPagamento());
