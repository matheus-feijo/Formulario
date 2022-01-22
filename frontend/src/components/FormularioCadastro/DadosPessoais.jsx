import React,{useContext, useState,useEffect} from 'react';
import { TextField, Button, Switch, FormControlLabel } from "@material-ui/core";

function DadosPessoais(props) {

  const initialValues ={
    nome:"",
    sobrenome:"",
    cpf:"",
    promocoes:false,
    novidades:false,

  };

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = () => {
    //console.log(formValues);
    props.aoEnviar(formValues);
  };

  //input change handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });

  }

  const handleChangeCheck = (e) => {
    const {name,checked} = e.target;
    console.log({name,checked});
    setFormValues({...formValues,[name]:checked});
  }

  //form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log("to aq")
    setFormErrors(validate(formValues));
    setIsSubmitting(true);
  };

  //form validation handler
  const validate = (values) => {
    let errors = {};

    if (!values.nome) {
      errors.nome = "Campo obrigatorio";
    }

    if (!values.sobrenome) {
      errors.sobrenome = "Campo Obrigatorio";
    }
    if (!values.cpf) {
      errors.cpf = "Campo Obrigatorio";
    }
    return errors;
  }

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmitting) {
      submit();
      setIsSubmitting(false);
    }
  }, [formErrors, isSubmitting, submit]);



  return (
    <form
      onSubmit={handleSubmit}
    >
      <TextField
        value={formValues.nome}
        onChange={handleChange}
        error={formErrors.nome}
        helperText={formErrors.nome}
        name="nome"
        id="nome"
        label="Nome"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        value={formValues.sobrenome}
        onChange={handleChange}
        error={formErrors.sobrenome}
        helperText={formErrors.sobrenome}
        name="sobrenome"
        id="sobrenome"
        label="Sobrenome"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        value={formValues.cpf}
        onChange={handleChange}
        error={formErrors.cpf}
        helperText={formErrors.cpf}
        id="CPF"
        name='cpf'
        label="CPF"
        variant="outlined"
        margin="normal"
        fullWidth
      />

      <FormControlLabel
        label="Promoções"
        control={
          <Switch
            checked={formValues.promocoes}
            onChange={handleChangeCheck}
            //onError={}
            name="promocoes"
            color="primary"
          />
        }
      />

      <FormControlLabel
        label="Novidades"
        control={
          <Switch
            checked={formValues.novidades}
            onChange={handleChangeCheck}
            name="novidades"
            color="primary"
          />
        }
      />

      <Button type="submit" variant="contained" color="primary" 
      >
        Proximo
      </Button>
    </form>
  );
}

export default DadosPessoais;
