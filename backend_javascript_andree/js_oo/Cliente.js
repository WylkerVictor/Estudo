var Cliente = /** @class */ (function () {
    function Cliente(id, nome, genero, email) {
        this.id = id;
        this.nome = nome;
        this.genero = genero;
        this.email = email;
    }
    return Cliente;
}());
var cliente1 = new Cliente(1, 'Marcos', 'M', 'robertinhofiwfiw@gmail.com');
console.log(cliente1.id, cliente1.nome, cliente1.genero, cliente1.email);
