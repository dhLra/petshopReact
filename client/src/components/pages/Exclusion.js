import React from "react";
import Form from "../Form";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios, * as others from "axios";

const Exclusion = () =>{

  const { id } = useParams();
  const [petshopData, setPetshopData] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3001/excluir/${id}`).then((response) => {
      setPetshopData(response.data);
    });
  }, []);

  const onClicked = ()=> {
    axios.delete(`http://localhost:3001/excluido/${id}`, {

    })
  }
  return(
    <div className="container">
      <h3>Excluir Visita</h3>
      {petshopData?.map((pet, i) =>
        <Form
          key={i}
          nomePet={pet.nome_pet}
          racaPet={pet.raca_pet}
          idadePet={pet.idade_pet}
          nomeDono={pet.nome_dono}
          telefoneDono={pet.telefone_dono}
          endDono={pet.endereco_dono}

          onClicked={onClicked} />
      )}
    </div>
  )
}

export default Exclusion;