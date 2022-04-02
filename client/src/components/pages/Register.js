import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios, * as others from "axios";

import Form from "../Form"

const Register = () => {

  const navigate = useNavigate();
  const [values, setValues] = useState();

  const onClicked = (caminho, bool) => {
    if(bool === 1){
      axios.post("http://localhost:3001/sucesso", {
        nome_pet: values.nome_pet,
        raca_pet: values.raca_pet,
        idade_pet: values.idade_pet,
        tipo_pet: values.tipo_pet,
        nome_dono: values.nome_dono,
        telefone_dono: values.telefone_dono,
        endereco_dono: values.endereco_dono,
      }).then((response)=>{
        console.log(response);
        navigate(`/${caminho}`);
      }); 
    } else{
      navigate(`/${caminho}`);
    }
  }

  const handleChangeValues = (value) => {
    setValues(prevValues => ({
      ...prevValues,
      [value.target.name]: value.target.value,
    }));
  }

    return (
      <div className="container">
        <h3 className="mt-3 ">MARCAR NOVA CONSULTA</h3>
        <Form 
        handleChangeValues={handleChangeValues}
        onClicked={onClicked}/>
      </div>
    );
  }
export default Register