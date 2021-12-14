import React from "react"
import axios from 'axios'

class  App extends React.Component {
  state= {
    nomeDaPlaylist: "",
    nomeDoArtista: "",
    linkDaPlaylist: ""
  };
  
  criarPlaylist = async () => {
try {
  const response = await axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists', {
    headers: {
      Authorization: "jaira-beletable-joy"
  }
})
console.log(response.data)
}catch(error){
  console.log(error.response.data)
}


  
  onchagenome = (event) => {
    this.setState({nomeDaPlaylist: event.target.value})
  };
 onchangeartista = (event) => {
    this.setState({nomeDoArtista:event.target.value})
  };
  onchangelinkDaPlaylist = (event) => {
    this.setState({link:event.target.value})
  };
  render()
  return (
    <div>
      <h2>Labefy</h2>
    </div>
  );  
  
}
}
export default App;
