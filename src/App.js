import React from "react"
import axios from "axios"
import  {useState,useEffect} from "react"




 export function App() {
   const [removerCard,setRemoverCard] = useState({});
   const [matchCard,setMatchCard] = useState({});
   const [id,setId] = useState(1)
   const[cards,setCards] = useState({})
   const[telaMatch,setTelaMatch] = useState({})
   

   const botaoRemover = () => {
     setRemoverCard(removerCard = false)
   }
   const botaoMatch = () => {
     setMatchCard(matchCard = true)
   }
   const botaoTelaMatch = () => {
   setTelaMatch(telaMatch = {}) 
   }
   const pegarPerfil= () => {
    axios
      .get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/person${id}`)
      .then((res) => setId(res.data));
  };

  useEffect(() => {
    pegarPerfil();
  }, [id]);

  const escolherCard = () => {
    axios
      .get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/choose-person${cards}`)
      .then((res) => setCards(res.data));
  };

  useEffect(() => {
    escolherCard();
  }, [cards]);

  return (
    <div className="App">
      <h2>bem-vindo ao astroMatch</h2> 
      <img src="coracao.png" alt="imagemCoracao"></img>
      <button onClick={botaoTelaMatch}><img src="casal.png" alt="Casal"></img></button> 
      <p>{pegarPerfil && pegarPerfil.name}</p>
      <button onClick={botaoMatch}><img src="coracao.png" alt="Coracao"></img></button>
      <p>{escolherCard?.escolherCard.name}</p> 
      <button onClick={botaoRemover}><img src="excluir.png" alt="Excluir"></img></button> 
    </div>
  );
}

export default App;
