import React, { useState } from "react";
import {
  ContainerForm,
  Title,
  Logo,
  InputDefault,
  InputEnderecoPrimeiro,
  InputEnderecoNumero,
  InputEnderecoSegundo,
  InputEnderecoEstado
} from "./style";
import logo from "../../img/logo.png";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Formulario = () => {
  let [rua, setRua] = useState("");
  let [bairro, setBairro] = useState("");
  let [cidade, setCidade] = useState("");
  let [estado, setEstado] = useState("");

  const onSubmit = () => {
    toast.success("Cadastro Realizado com sucesso");
  };

  const schema = yup.object().shape({
    nome: yup.string().required(),
    email: yup.string().required("Campo obrigatório").email("Email inválido"),
    numero: yup.number().required(),
    cep: yup
      .number()
      .required("Digite o Cep")
      .min(8, "Digite o cep completo")
      .max(8, "o cep deve ter 8 números"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const consultarCep = (cep) => {
    if (cep.target.value.length > 8) {
      toast.warning("O cep deve conter 8 dígitos");
    }
    if (cep.target.value.length === 8) {
      axios
        .get(`https://viacep.com.br/ws/${cep.target.value}/json/`)
        .then((response) => {
          console.log(response.data.cep);
          if (response.data.cep) {
            setRua(response.data.logradouro);
            setBairro(response.data.bairro);
            setCidade(response.data.localidade);
            setEstado(response.data.uf);
            toast.success("Endereço Localizado");
          } else {
            toast.warning("Por favor digite um cep valido");
          }
        })
        .catch((erro) => {
          console.log(erro);
        });
    }
  };

  return (
    <ContainerForm>
      <Logo src={logo} alt="logo Embracon" />
      <Title>Se Cadastre e fique mais perto do seu SONHO</Title>
      <ToastContainer />
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputDefault type="text" placeholder="Nome" {...register("nome")} />

        <InputDefault type="text" placeholder="Email" {...register("email")} />
        <p>{errors.email?.message}</p>

        <InputDefault
          type="number"
          placeholder="Digite seu Cep"
          {...register("cep")}
          onChange={consultarCep}
        />

        <div>
          <InputEnderecoPrimeiro readOnly type="text" placeholder={rua === "" ? 'rua' : rua} />
          <InputEnderecoNumero type="number" placeholder="n°" />
        </div>

        <div>
          <InputEnderecoSegundo readOnly type="text" placeholder={bairro === "" ? 'bairro' : bairro} />
          <InputEnderecoSegundo readOnly type="text" placeholder={cidade === "" ? 'cidade' : cidade} />
          <InputEnderecoEstado readOnly type="text" placeholder={estado === "" ? 'estado' : estado} />
        </div>

        <button type="submit">Cadastrar</button>
      </form>
    </ContainerForm>
  );
};

export default Formulario;
