import React, { Component } from "react";
import "./App.css";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import 'fontsource-roboto';
import {Container, Typography } from "@material-ui/core"
import validarCadastro from "./Context/validacao";
import axios from "axios";

class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" component="h1" align="center" >Formulário de cadastro</Typography>
        <FormularioCadastro/>
        
      </Container>
    );
  }
}

export default App;
