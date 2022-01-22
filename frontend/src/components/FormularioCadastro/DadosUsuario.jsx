import React, { useEffect, useState } from "react";
import { TextField, Button } from "@material-ui/core";
import * as yup from "yup";

function DadosUsuario(props) {

  const initialValues ={email:"",senha:""};

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

  //form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmitting(true);
  };

  //form validation handler
  const validate = (values) => {
    let errors = {};

    if (!values.email) {
      errors.email = "Campo obrigatorio";
    }

    if (!values.senha) {
      errors.senha = "Campo Obrigatorio";
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
        value={formValues.email}
        name="email"
        id="email"
        label="email"
        //type="email"
        variant="outlined"
        margin="normal"
        fullWidth
        //onBlur={validarCampos}
        error={formErrors.email}
        helperText={formErrors.email}
        onChange={handleChange}
        
      />
      <TextField
        value={formValues.senha}
        name="senha"
        id="senha"
        label="senha"
        //type="password"
        variant="outlined"
        margin="normal"
        fullWidth
        onChange={handleChange}
        //onBlur={validarCampos}
        error={formErrors.senha}
        helperText={formErrors.senha}

      />
      <Button type="submit" variant="contained" color="primary"
      >
        Proximo
      </Button>
    </form>
  );
}

export default DadosUsuario;
