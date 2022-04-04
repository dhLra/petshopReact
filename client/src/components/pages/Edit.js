import React from "react";
import Form from "../Form";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios, * as others from "axios";


const Edit = () => {

  const { id } = useParams();
  const [petshopData, setPetshopData] = useState([]);
  const [editValues, setEditValues] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3001/editar/${id}`).then((response) => {
      setEditValues(response.data);
      setPetshopData(response.data);
    });
  }, []);

  const navigate = useNavigate;

  const handleChangeValues = (value) => {
    setEditValues(prevValues => ({
      ...prevValues,
      [value.target.id]: value.target.value,
    }));
  };

  const onClicked = (acao , caminho) => {
    if (acao == "enviar") {
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
        navigate(`/${caminho}`);
      });
    } else {
      navigate(`/`);
    }
  }

  return (

    <div className="container">

      <h3>Editar Visita</h3>
      {petshopData?.map((pet, i) =>
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