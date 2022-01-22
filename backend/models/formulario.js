const { conexao } = require("../infraestrutura/tabela")

class formulario{
    adiciona(dados,res){


        const sqlUsers = `INSERT INTO Usuarios (nome,sobrenome,cpf,promocoes,novidades) values(${dados.nome},${dados.sobrenome},${dados.cpf},${dados.promocoes},${dados.novidades})`

        conexao.query(sqlUsers,(erro,result)=>{
            if(erro){
                console.log(erro);
            }else{
                console.log(result);
            }
        })

        const cliente = this.buscaId()

        //const sqlEntrega = `INSERT INTO Entrega (cep,cliente,numero,estado,cidade) values(${dados.cep},${dados},${dados.cep},${dados.cep},${dados.cep})`
    }

    buscaId(){
        const sql = "SELECT id from Usuarios"

        conexao.query(sql,(erro,result)=>{
            if(erro){
                console.log(erro)
            }else{
                console.log(result)
            }
        })

        return 
    }

    lista(res){
        const sql = "SELECT * FROM Usuarios INNER JOIN Entrega on Usuarios.id = Entrega.cliente"

        conexao.query(sql,(erro)=>{
            if(erro){
                console.log("erro listagem: ",erro);
            }else{
                console.log("deu certo")
            }
        })
    }
}
module.exports = new formulario