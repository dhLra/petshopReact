import React from "react";
import Form from "../Form";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";


const Edit = () => {

  /*Recebe o paramentro do id pela URL*/
  const { id } = useParams();
  const [petshopData, setPetshopData] = useState([]);
  const [editValues, setEditValues] = useState([]);
  const navigate = useNavigate;

  /*Faz uma requisição ao BD com base no id*/
  useEffect(() => {
    axios.get(`http://localhost:3001/editar/${id}`).then((response) => {
      /*Atualiza o estado das variaveis*/
      setEditValues(response.data);
      setPetshopData(response.data);
    });
  }, []);

  /*Seta os novos valores para enviar ao bando de dados*/
  const handleChangeValues = (value) => {
    setEditValues(prevValues => ({
      ...prevValues,
      [value.target.id]: value.target.value,
    }));
  };
  /*Faz o envio do novo dado para o BD*/
  const onClicked = (acao, caminho) => {
    /*Botão enviar é assionado*/
    if (acao == "enviar") {
      /*Atualiza os dados com base no que esta armazenado na varivel "editValues"*/
      axios.put(`http://localhost:3001/editado`, {
        id: id,
        nome_pet: editValues.nome_pet,
        raca_pet: editValues.raca_pet,
        idade_pet: editValues.idade_pet,
        tipo_pet: editValues.tipo_pet,
        nome_dono: editValues.nome_dono,
        telefone_dono: editValues.telefone_dono,
        endereco_dono: editValues.endereco_dono
      }).then((response) => {
        console.log(response);
        /* Navega para a pagina inicial */
        navigate(`/${caminho}`);
      });
      /* Botão cancelar é assiondo */
    } else {
      /* Navega para a pagina inicial */
      navigate(`/`);
    }
  }

  return (

    <div className="container">
      <h3>Editar Visita</h3>
      {/*Map para printar na tela dodos os regitros do banco de dados*/}
      {petshopData?.map((pet, i) =>
        /*Passando informações via props*/
        <Form
          key={i}
          nomePet={pet.nome_pet}
          racaPet={pet.raca_pet}
          idadePet={pet.idade_pet}
          nomeDono={pet.nome_dono}
          telefoneDono={pet.telefone_dono}
          endDono={pet.endereco_dono}

          handleChangeValues={handleChangeValues}
          onClicked={onClicked} />
      )}
    </div>
  );
}
export default Edit