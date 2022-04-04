import { Button } from 'react-bootstrap'
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarPlus, faCalendarCheck, faFaceSmile, faFaceMeh, faFaceFrown } from '@fortawesome/free-solid-svg-icons';
import banner from '../../img/bannerr.jpg';
import item1 from '../../img/item1.webp'
import item2 from '../../img/item2.webp'
import item3 from '../../img/item3.webp'
import item4 from '../../img/item4.webp'
import item5 from '../../img/item5.webp'
import item6 from '../../img/item6.webp'

const Home = () => {

  const navigate = useNavigate();

  const onClicked = (caminho) => {
    navigate(`/${caminho}`)
  }

  return (
    <div className="container">
      <div className="row text-center mt-1 p-2">
        <label> <b className="pe-1 ps-1" style={{ backgroundColor: "red", color: "white", borderRadius: "10px" }}>10%</b> de <b>desconto</b> para clientes cadastrados!</label>
      </div>
      <div className="banner text-center">
        <img src={banner} style={{borderRadius:"30px"}}></img>
      </div>
      <div className="row mt-3 text-center">
        <div className="col-6">
          <Button
            className="btn btn-success btn-home"
            onClick={() => onClicked("agendar")}>
            <FontAwesomeIcon icon={faCalendarPlus} transform="grow-14" style={{ marginRight: "25px" }} />Agendar Visita</Button>
        </div>
        <div className="col-6">
          <Button
            className="btn btn-primary btn-home"
            onClick={() => onClicked("consultar")}>
            <FontAwesomeIcon icon={faCalendarCheck} transform="grow-14" style={{ marginRight: "25px" }} />Consultar Visita</Button>
        </div>
        {/*<div className="col-4">
          <Button
            className="btn btn-danger btn-home"
            onClick={() => onClicked("excluir")}>
            <FontAwesomeIcon icon={faCalendarXmark} transform="grow-14" style={{ marginRight: "25px" }} /> Excluir Visita</Button>
        </div>*/}
      </div>
      <div className="row mt-5 mb-4 text-center">
        <h3 className="mb-3 items">MAIS VENDIDOS</h3>
        <hr />
        <div className="col-4">
          <div className="row justify-content-center">
            <img className="w-50" src={item1}></img>
          </div>
          <div className="row justify-content-center">
            <div class="btn-group w-50" role="group" aria-label="Basic mixed styles example">
              <button type="button" class="btn btn-success"><FontAwesomeIcon icon={faFaceSmile} /></button>
              <button type="button" class="btn btn-danger"><FontAwesomeIcon icon={faFaceFrown} /></button>
            </div>
          </div>
        </div>

        <div className="col-4">
          <div className="row justify-content-center">
            <img className="w-50" src={item2}></img>
          </div>
          <div className="row justify-content-center">
            <div class="btn-group w-50" role="group" aria-label="Basic mixed styles example">
              <button type="button" class="btn btn-success"><FontAwesomeIcon icon={faFaceSmile} /></button>
              <button type="button" class="btn btn-danger"><FontAwesomeIcon icon={faFaceFrown} /></button>
            </div>
          </div>
        </div>

        <div className="col-4">
          <div className="row justify-content-center">
            <img className="w-50" src={item3}></img>
          </div>
          <div className="row justify-content-center">
            <div class="btn-group w-50" role="group" aria-label="Basic mixed styles example">
              <button type="button" class="btn btn-success"><FontAwesomeIcon icon={faFaceSmile} /></button>
              <button type="button" class="btn btn-danger"><FontAwesomeIcon icon={faFaceFrown} /></button>
            </div>
          </div>
        </div>

      </div>
      <div className="row mb-5 text-center">
        <div className="col-4">
          <div className="row justify-content-center">
            <img className="w-50" src={item4}></img>
          </div>
          <div className="row justify-content-center">
            <div class="btn-group w-50" role="group" aria-label="Basic mixed styles example">
              <button type="button" class="btn btn-success"><FontAwesomeIcon icon={faFaceSmile} /></button>
              <button type="button" class="btn btn-danger"><FontAwesomeIcon icon={faFaceFrown} /></button>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="row justify-content-center">
            <img className="w-50" src={item5}></img>
          </div>
          <div className="row justify-content-center">
            <div class="btn-group w-50" role="group" aria-label="Basic mixed styles example">
              <button type="button" class="btn btn-success"><FontAwesomeIcon icon={faFaceSmile} /></button>
              <button type="button" class="btn btn-danger"><FontAwesomeIcon icon={faFaceFrown} /></button>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="row justify-content-center">
            <img className="w-50" src={item6}></img>
          </div>
          <div className="row justify-content-center">
            <label>Classifique o item:</label>
            <div class="btn-group w-50" role="group" aria-label="Basic mixed styles example">
              <button type="button" class="btn btn-success"><FontAwesomeIcon icon={faFaceSmile} /></button>
              <button type="button" class="btn btn-danger"><FontAwesomeIcon icon={faFaceFrown} /></button>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div >
  );
}

export default Home;