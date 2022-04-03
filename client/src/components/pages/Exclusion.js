import axios from "axios";
import Table from "../Table";

const Exclusion = () =>{

  const onClicked = ()=> {
  }
  return(
    <div className="container">
      <h3>Excluir Visita</h3>
      <Table 
      button={'Excluir'} 
      type={'btn btn-danger'}/>
    </div>
  )
}

export default Exclusion;