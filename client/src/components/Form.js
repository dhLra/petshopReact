const Form = (props) => {

  return (
    <div className="container-form mx-auto mt-3">
      <form>
        <h3 className="text-center mb-3">SOBRE SEU PET</h3>
        <div className="row mb-3">
          <div className="col-4">
            <label htmlFor="exampleInputEmail1" className="form-label">Nome</label>
            <input id="nome_pet" defaultValue={props.nomePet} type="text" name="nome_pet"className="form-control" onChange={props.handleChangeValues} />
          </div>
          <div className="col-4">
            <label htmlFor="exampleInputEmail1" className="form-label">Raça</label>
            <input id="raca_pet" defaultValue={props.racaPet} type="text" name="raca_pet" className="form-control" onChange={props.handleChangeValues} />
          </div>
          <div className="col-2">
            <label htmlFor="exampleInputEmail1" className="form-label">Idade</label>
            <input id="idade_pet" defaultValue={props.idadePet} type="text" name="idade_pet" className="form-control" onChange={props.handleChangeValues} />
          </div>
          <div className="col-2">
            <label className="form-check-label" htmlFor="exampleCheck1">Tipo</label>
            <div className="form-check">
              <input type="checkbox" className="form-check-input" id="exampleCheck1" />
              <label className="form-check-label" htmlFor="exampleCheck1">Cachorro</label>
            </div>
            <div className="form-check">
              <input type="checkbox" className="form-check-input" id="exampleCheck1" />
              <label className="form-check-label" htmlFor="exampleCheck1">Gato</label>
            </div>
          </div>
        </div>
        <hr />
        <h3 className="text-center mt-3">SOBRE VOCÊ</h3>
        <div className="row mb-2">
          <div className="col-6">
            <label htmlFor="exampleInputEmail1" className="form-label">Nome</label>
            <input id="nome_dono" defaultValue={props.nomeDono} type="text" name="nome_dono" className="form-control" onChange={props.handleChangeValues} />
          </div>
          <div className="col-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Telefone</label>
            <input id="telefone_dono" defaultValue={props.telefoneDono} type="text" name="telefone_dono" className="form-control" onChange={props.handleChangeValues} />
          </div>
          <div className="col-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Endereço</label>
            <input id="endereco_dono" defaultValue={props.endDono} type="text" name="endereco_dono" className="form-control" onChange={props.handleChangeValues} />
          </div>
        </div>
        <button className="btn btn-success mt-3 me-2" onClick={() =>{props.onClicked("enviar" , "sucesso")}}>Enviar</button>
        <button type="submit" className="btn btn-secondary mt-3" onClick={() => {props.onClicked('')}}>Cancelar</button>
      </form>
    </div>
  );
}

export default Form;