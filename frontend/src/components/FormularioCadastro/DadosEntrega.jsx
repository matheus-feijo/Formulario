import React,{useEffect, useState} from "react";
import { TextField, Button } from "@material-ui/core";

function DadosEntrega(props) {



  const initialValues ={
    cep:"",
    endereco:"",
    numero:"",
    estado:"",
    cidade:"",
  }

  const [formValues,setFormValues] = useState(initialValues);
  const [isSubmitting,setIsSubmitting] = useState(false);
  const [formErrors,setFormErrors] = useState({});

  const submit = ()=>{
    props.aoEnviar(formValues);
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    //console.log("to aq")
    setFormErrors(validate(formValues));
    setIsSubmitting(true);
  }

  const handleChange = (e)=>{
    const {name,value} = e.target;
    setFormValues({...formValues,[name]:value})

  }

  const validate =(values)=> {
    const erro = {}

    if(!values.cep){
      erro.cep = "Campo Obrigatorio";
    }
    if(!values.endereco){
      erro.endereco = "Campo Obrigatorio";
    }
    if(!values.numero){
      erro.numero = "Campo Obrigatorio";
    }
    if(!values.estado){
      erro.estado = "Campo Obrigatorio";
    }
    if(!values.cidade){
      erro.cidade = "Campo Obrigatorio";
    }

    return erro;

  }


  useEffect(()=>{
    if(Object.keys(formErrors).length !==0 && isSubmitting){
      submit()
      setIsSubmitting(false);
    }
  },[formErrors,isSubmitting,submit])

  return (
    <form
    onSubmit={handleSubmit}
    >
      <TextField
        value={formValues.cep}
        error={formErrors.cep}
        helperText={formErrors.cep}
        name="cep"
        id="cep"
        label="CEP"
        type="number"
        variant="outlined"
        margin="normal"
        onChange={handleChange}
    
      />
      <TextField
        value={formValues.endereco}
        error={formErrors.endereco}
        helperText={formErrors.endereco}
        name="endereco"
        id="endereco"
        label="Enderço"
        type="text"
        variant="outlined"
        margin="normal"
        fullWidth
        onChange={handleChange}
      />
       <TextField
        value={formValues.numero}
        error={formErrors.numero}
        helperText={formErrors.numero}
        name="numero"
        id="numero"
        label="Numero"
        type="number"
        variant="outlined"
        margin="normal"
        onChange={handleChange}
        
      />
       <TextField
        value={formValues.estado}
        error={formErrors.estado}
        helperText={formErrors.estado}
        name="estado"
        id="estado"
        label="Estado"
        type="text"
        variant="outlined"
        margin="normal"
        onChange={handleChange}
      />
       <TextField
        value={formValues.cidade}
        error={formErrors.cidade}
        helperText={formErrors.cidade}
        name="cidade"
        id="cidade"
        label="Cidade"
        type="text"
        variant="outlined"
        margin="normal"
        onChange={handleChange}
      />
       <Button type="submit" variant="contained" color="primary" fullWidth>
        Finalizar Cadastro
      </Button>
    </form>
  );
}

export default DadosEntrega;
