const customExpress = require('./config/customExpress')
const conexao = require("./infraestrutura/conex")
const Tabela = require('./infraestrutura/tabela')
const cors = require("cors")

conexao.connect((error)=>{
    if(error){
        console.log("error na conexao")
    }else{
        console.log("conectado")
        Tabela.init(conexao)
        const app = customExpress()

    
        app.listen(5000)
    }
})