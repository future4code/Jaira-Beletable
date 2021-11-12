import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import styled from 'styled-components'

const App = styled.className`
.App {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
}`

const Pagina = styled.className`
bigcard-container {
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
}

.bigcard-container > img {
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
}

.bigcard-container h4 {
    margin-bottom: 15px;
}

.bigcard-container > div {
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
}`

const imagem = styled.className`
.image-button-container {
    display: flex;
    align-items: center;
    border: 1px solid black;
    border-radius: 50px;
    width: 200px;
    padding: 15px 30px;
    margin: 10px auto;
}

.image-button-container > img {
    width: 30px;
    margin-right: 10px;
}`

const Pagina = styled.className`
bigcard-container {
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
}

.bigcard-container > img {
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
}

.bigcard-container h4 {
    margin-bottom: 15px;
}

.bigcard-container > div {
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
}`





export function MeuComponente(props) {
  return <div>
    <img src={props.imagem}/>
    <p>{props.texto}</p>
    <P>{props.nome}</P>
    <p>{props.descricao}</p>
    <p>{props.email}</p>
    <p>{props.endereço}</p>
  </div>
}
function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="P00303-113535.jpg" 
          nome="Jaira-Beletable" 
          descricao="Oi,sou aluna de programação da labenu nas horas vagas gosto de ler e ouvir música e sair com meus amigos"
        />
        
        <ImagemButton 
          imagem={ "https://image.flaticon.com/icons/png/512/117/117472.png"}
          texto={ "Ver Mais"}
        />

      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png"
          nome="Jaira-Beletable"
          descricao="Experiência na  área terapêutica"
        />
        
        <CardGrande 
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg" 
          nome="Jaira-Beletable" 
          descricao="Busco vaga de desenvolvendora estou cursando o curso de desenvolvendor full stack" 
          
      />  
       <CardPequeno
       email="jairab52@gmail.com"
        endereço="rua das dalias 450,casa 07"
      />

        
        
      
     

      
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
