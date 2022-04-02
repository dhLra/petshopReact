import { Button } from 'react-bootstrap'
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarPlus, faCalendarXmark, faCalendarCheck } from '@fortawesome/free-solid-svg-icons';

const Home = () => {

  const navigate = useNavigate();

  const onClicked = (caminho) => {
    navigate(`/${caminho}`)
  }

  return (
    <div className="container">
      <div className="row text-center mt-1">
        <h5>10% de desconto para clientes cadastrados!</h5>
      </div>
      <div className="banner text-center">
        <img src='https://via.placeholder.com/1080x300'></img>
      </div>
      <div className="row mt-3 text-center">
        <div className="col-4">
          <Button
            className="btn btn-success btn-home"
            onClick={() => onClicked("agendar")}>
            <FontAwesomeIcon icon={faCalendarPlus} transform="grow-14" style={{ marginRight: "25px" }} />Agendar Visita</Button>
        </div>
        <div className="col-4">
          <Button
            className="btn btn-primary btn-home"
            onClick={() => onClicked("consultar")}>
            <FontAwesomeIcon icon={faCalendarCheck} transform="grow-14" style={{ marginRight: "25px" }} />Consultar Visita</Button>
        </div>
        <div className="col-4">
          <Button
            className="btn btn-danger btn-home"
            onClick={() => onClicked("excluir")}>
            <FontAwesomeIcon icon={faCalendarXmark} transform="grow-14" style={{ marginRight: "25px" }} /> Excluir Visita</Button>
        </div>
      </div>

      <div className="row mt-5 mb-4 text-center">
        <h3 className="mb-3">MAIS VENDIDOS</h3>
        <div className="col-4">
          <img src='https://via.placeholder.com/150'></img>
        </div>
        <div className="col-4">
          <img src='https://via.placeholder.com/150'></img>
        </div>
        <div className="col-4">
          <img src='https://via.placeholder.com/150'></img>
        </div>
      </div>
      <div className="row mb-5 text-center">
        <div className="col-4">
          <img src='https://via.placeholder.com/150'></img>
        </div>
        <div className="col-4">
          <img src='https://via.placeholder.com/150'></img>
        </div>
        <div className="col-4">
          <img src='https://via.placeholder.com/150'></img>
        </div>
      </div>
    </div >
  );
}

export default Home;