export function validarCPF(cpf){
    if(cpf.length !== 11){
      return {valido:false, texto:"CPF deve ter 11 digitos."}
    }else{
      return {valido:true, texto:""}
    }
  }
  
  export function validarSenha(senha){
    if(senha.length ===0 || senha===""){
      return {valido:false,texto:"Senha menor que 5 caracteres"};
    }else{
      return {valido:true,texto:""};
    }
  }

  export function validarEmail(email){
      if(email.length ===0 || email===""){
          return {valido:false,texto:"email menor que 5"};
      }else{
          return {valido:true,texto:""};
      }
  }

  export function validarNome(nome){
      if(nome.length <5){
          return{valido:false,texto:"nome invalido"}
      }else{
          return{valido:true,texto:""};
      }
  }