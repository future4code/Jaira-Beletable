import React from "react"
import axios from "axios"
import  styled from 'styled-components'

export default class App extends React.Component() {
  ComponentDidMount() {
    this.criarPlaylist()
  }
  
  state={
    buscarPorNome:"" ,
    nomeDaMusica: "",
    nomeDoArtista: "",
    link:""

  }
criarPlaylist = async () => {
  try {
    const response = await axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlist', {
      headers: {
        Authorization: 'jaira-beletable-joy'
      }
    });
  
console.log(response.data)
}catch(error) {
  console.log(error.response.data)
}
}
}
deletaPlaylist = async () => {
  try {
    const response = await axios.delete('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists${Id}',{
      headers: {
        Authorization: 'jaira-beletable-joy'
      }
    })
  
console.log(response.data)
}catch(error) {
  console.log(error.response.data)
}


onChangebuscarPorNome = (event) => {
  this.setState({buscarPorNome: event.target.value})
}
onChangenomeDaMusica = (event) => {
  this.setState({nomeDaMusica: event.target.value})
}
onChangenomeDoArtista =  (event) => {
  this.setState({nomeDoArtista: event.target.value})
}
onChangelink = (event) => {
  this.setState({link: event.target.value})

}
onClickbuscar = () => {
  this.setState ({buscarPorNome: this.state.buscarPorNome})
}

  render() ;{
const renderPlaylist = this.state.buscarPorNome.map((playlist) => {
  return <p>{this.buscarPorNome.nome}</p>
});

  return (
    <div>
      <h2>labefy</h2>
      <input placeholder="buscarplaylist" value={this.state.buscarPorNome} onChange={ this.onChangebuscarPorNome} />
      <button onclick={this.onclickbuscar}>buscar</button>
      <input placeholder="nomedamusica" value={this.state.nomeDaMusica}  onChange={this.onChangenomeDaMusica} />
      <input placeholder="nomedoartista" value={this.state.nomeDoArtista}  onChange={this.onChangenomeDoArtista} />
      <input placeholder="link" value={this.state.link} onChange={this.onChangelink} />
      <button onClick={this.criarPlaylist}>adicionar playlist</button>
      <button onClick={this.deletaPlaylist}>x</button>
      <div>{renderPlaylist}</div>
    </div>
  );
  }
  
}

