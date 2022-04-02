const AboutUs = () => {
  return (
    <div className="container">
      <div className="row mt-3">
        <div className="col-6">
          <h2 className="text-center mb-3">Olá, meu nome é Dhiego!</h2>
          <p>IInfelizmente, (ou não), essa não é uma pagina real sobre uma petshop, 
            mas vocês sabem disso, então eu vou usar essa parte do "Sobre Nós" 
            para me apresenta um pouco.
          </p>
          <p>Como eu disse antes, meu nome é Dhiego e tenho pouco menos de um 
            ano de experiência profissional com desenvolvimento full stack, porém,
             estou perto de me formar em Ciência da Computação pela UniFavip e estou
              em busca da minha primeira oportunidade como desenvolvedor Júnior.
          </p>

          <p>*Sim estou correndo do tcc*</p>

          <p>Para alegrar o seu dia, caro avaliador, 
            aqui ao lado estão algumas fotos dos meus pets ;D.
          </p>
        </div>
        <div className="col-6">
          <a href='https://placeholder.com/'><img src='https://via.placeholder.com/400x500'></img></a>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;