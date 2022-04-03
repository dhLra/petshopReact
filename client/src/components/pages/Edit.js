import Form from "../Form";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";


const Edit = () => {

  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3001/editar/${id}`).then((response) => {
      setPetshopData(response.data);
    });
  }, []);

  const navigate = useNavigate;
  const [petshopData, setPetshopData] = useState([]);
  const petData = (petshopData.filter(p => p.id == id));
  const [editValues, setEditValues] = useState({
    id: petshopData.id,
    nome_pet: petData.nome_dono,
    raca_pet: petData.raca_pet,
    idade_pet: petData.idade_pet,
    tipo_pet: petData.tipo_pet,
    nome_dono: petData.nome_dono,
    telefone_dono: petData.telefone_dono,
    endereco_dono: petData.endereco_dono
  });

  const handleChangeValues = (value) => {
    setEditValues(prevValues => ({
      ...prevValues,
      [value.target.nome]: value.target.value,
    }));
  }
  const onClicked = () => {
    console.log(petshopData)
    axios.put(`http://localhost:3001/editar`, {
      id: editValues.id,
      nome_pet: editValues.nome_dono,
      raca_pet: editValues.raca_pet,
      idade_pet: editValues.idade_pet,
      tipo_pet: editValues.tipo_pet,
      nome_dono:editValues.nome_dono,
      telefone_dono: editValues.telefone_dono,
      endereco_dono: editValues.endereco_dono
    })
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