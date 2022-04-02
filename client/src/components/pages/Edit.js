import Form from "../Form";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";


const Edit = () => {

  const navigate = useNavigate;
  const { id } = useParams();
  const [petshopData, setPetshopData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/consultar").then((response) => {
      setPetshopData(response.data);
    });
  }, []);

  const petData = (petshopData.filter(p => p.id == id))

  return (

    <div className="container">

      <h3>Editar Visita</h3>
      {petData?.map((pet,i) => 
              <Form 
              key={i}
              nomePet={pet.nome_pet}
              racaPet={pet.raca_pet}
              idadePet={pet.idade_pet}
              nomeDono={pet.nome_dono}
              telefoneDono={pet.telefone_dono}
              endDono={pet.endereco_dono}/>
      )}
    </div>
  );

}
export default Edit