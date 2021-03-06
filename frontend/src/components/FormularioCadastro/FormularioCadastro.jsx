import React, { Fragment, useEffect, useState } from "react";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";
import DadosEntrega from "./DadosEntrega";
import { Step, StepLabel, Stepper, Typography } from "@material-ui/core";
import api from "api"

function FormularioCadastro() {
  const [etapa,setEtapa] = useState(0);
  const[dados,setDados] = useState({});

  const formularios = [
    <DadosUsuario aoEnviar={coletarDados}></DadosUsuario>,
    <DadosPessoais aoEnviar={coletarDados}></DadosPessoais>,
    <DadosEntrega aoEnviar={coletarDados}></DadosEntrega>,
    <Typography variant="h5" >Obrigado pelo cadastro</Typography>,
  ];

  useEffect(()=>{
    console.log(dados);
  })

  function coletarDados(dadosColetados){
    setDados({...dados,...dadosColetados});
    proximo();
  }

  function proximo(){
    return setEtapa(etapa+1)
  }

  async function enviaDados(){
    try {
      api.post("/formulario/adicionar",dados);

    } catch (error) {
      console.error(error)
    }
    

    
  
}
  
  return (
    <Fragment>
      <Stepper activeStep={etapa} alternativeLabel>
        <Step>
          <StepLabel>dados usuario</StepLabel>
        </Step>
        <Step>
          <StepLabel>dados pessoais</StepLabel>
        </Step>
        <Step>
          <StepLabel>dados entrega</StepLabel>
        </Step>
        <Step>
          <StepLabel>finalizando</StepLabel>
        </Step>
      </Stepper>

      {formularios[etapa]}
    </Fragment>
  );

}

export default FormularioCadastro;
