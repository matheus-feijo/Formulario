

class Tabela{

    init(conexao){
        this.conexao = conexao
        
        this.criaTabela()
    }


    criaTabela(){
        const sqlUser = "CREATE TABLE IF NOT EXISTS  Usuarios (id integer NOT NULL AUTO_INCREMENT PRIMARY KEY,nome varchar(50) NOT NULL, sobrenome varchar(50) NOT NULL, cpf varchar(12) NOT NULL,promocoes boolean, novidades boolean) "

        const sqlEntrega = "CREATE TABLE IF NOT EXISTS Entrega (id integer NOT NULL AUTO_INCREMENT PRIMARY KEY,cliente integer not null, cep varchar(20) NOT NULL, endereco varchar(50) NOT NULL,numero integer NOT NULL, estado varchar(20) NOT NULL, cidade varchar(20) NOT NULL, FOREIGN KEY (cliente) REFERENCES Usuarios(id))"

        this.conexao.query(sqlUser,(erro)=>{
            if(erro){
                console.log(erro);
            }else{
                console.log("tabela de usuarios criada");
            }
        })

        this.conexao.query(sqlEntrega,(erro)=>{
            if(erro){
                console.log(erro);
            }else{
                console.log("tabela dos dados da entrega criado");
            }
        })

    }
}

module.exports = new Tabela