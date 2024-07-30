class Cliente{
    id:number;
    nome:string;
    genero:string;
    email:string;

    constructor(id:number, nome:string, genero:string, email:string){
        this.id = id
        this.nome = nome
        this.genero = genero
        this.email = email
    }

    exibirCliente(){

        return console.log(cliente1.nome, cliente1.genero, cliente1.email);
    }
}

const cliente1 = new Cliente(1, 'Marcos', 'M', 'marcosfiwfiw@gmail.com')
const cliente2 = new Cliente(2, 'Barbara', 'F', 'barbarafiwfiw@gmail.com')

cliente1.exibirCliente()
cliente2.exibirCliente()