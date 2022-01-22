const formulario = require("../models/formulario")

module.exports = dados =>{
    dados.post("/formulario/adicionar",(req,res)=>{
        const dados = req.body
        formulario.adiciona(dados,res)
        res.json({message:"estou fazendo um post"})
        res.send("estou no post");
        console.log("estou fazendo um post")
    })

    dados.get("/formulario/listagem",(req,res)=>{
        formulario.lista(res)
        console.log("estou fazendo um get")

    })
}