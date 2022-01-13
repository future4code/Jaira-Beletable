import React from "react"
import axios from "axios"
import  {useState,useEffect} from "react"
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { withStyles } from "@material-ui/core/styles";
import CloseIcon from '@mui/icons-material/Close';


export function TelaMatch(id) {

    const [irTela,setMudarTela] = useState({});
    const[limpar,setLimparTela] = useState ({})

    const matchs = () => {
     axios   
    .get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/matches${id}')
     then((res) => setMudarTela(res.data)   
    
}
    useEffect(() => {
        matchs();
      }, [id]);
        
   
} 
const limpar = () => {
axios
.put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/clear')
then((res) => setLimparTela(res.data)

}
useEffect(() => {
    limpar();
  }, [{}]);
  
  const limparMatchs = () => {
    setLimparTela(limpar({})
  }

 return
 <div>

<button onClick={limparMatchs}> <icon name='CloseIcon' size={20} color='blue'/></button>
   </div>
  
 

  export default withStyles(styles)(TelaMatch) 
      

    
    


