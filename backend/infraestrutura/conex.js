const mysql = require("mysql2")


const conexao = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"matheus2506",
    port:3306,
    database:"formulario"

})

module.exports =  conexao