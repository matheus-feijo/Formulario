import React from "react";
import { validarCPF, validarEmail, validarNome, validarSenha } from "../components/Cadastro";

const validarCadastro = React.createContext({
    cpf:validarCPF,
    nome:validarNome,
    email:validarEmail,
    senha:validarSenha,
});

function naoValidar(dados){
    console.log(dados);
    return {valido:true,texto:""};
}

export default validarCadastro;

