import React from "react"
import axios from "axios"
import  {useState,useEffect} from "react"
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { withStyles } from "@material-ui/core/styles";
import Icon from 'react-native-vector-icons/FontAwesome'
import FavoriteIcon from '@mui/icons-material/Favorite';
import PeopleIcon from '@mui/icons-material/People';
import CloseIcon from '@mui/icons-material/Close';
import { TelaMatch } from "./TelaMatch";


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
   const pegarPerfil= (id) => {
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
      <icon name='FavoriteIcon' size={20} color='red'/>
      <button onClick={botaoTelaMatch}> <icon name='PeopleIcon' size={20} color='blue'/></button> 
      <p>{pegarPerfil && pegarPerfil.name}</p>
      <button onClick={botaoMatch}> <icon name='FavoriteIcon' size={20} color='red'/></button>
      <p>{escolherCard?.escolherCard.name}</p> 
      <button onClick={botaoRemover}> <icon name='CloseIcon' size={20} color='blue' /></button>
      <p>{TelaMatch}</p> 
    </div>
  );
}

export default withStyles(styles)(App);
