import React from "react"
import axios from "axios"
import  styled from 'styled-components'

class App extends React.Component() {
  ComponentDidMount() {
    this.criarPlaylist()
  }
  
  state={
    buscarPorNome:"",
    nomeDaMusica: "",
    nomeDoArtista: "",
    link:""

  }
criarPlaylist = async () => {
  try {
    const response = await axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists', {
      headers: {
        Authorization: 'jaira-beletable-joy'
      }
    })
  
console.log(response.data)
}catch(error) {
  console.log(error.response.data)
}
}
}
onchangebuscarPorNome = (event) => {
  this.setState({buscarPorNome: event.target.value})
}
onchangenomeDaMusica =  (event) => {
  this.setState({nomeDaMusica: event.target.value})
}
onchangenomeDoArtista =  (event) => {
  this.setState({nomeDoArtista: event.target.value})
}
onchangelink = (event) => {
  this.setState({link: event.target.value})

}
onclickbuscar = () => {
  this.setState ({buscarPorNome: this.state.buscarPorNome})
}

  render() ;{
  return (
    <div>
      <h2>labefy</h2>
    </div>
  );
  }
  
  

export default App;
