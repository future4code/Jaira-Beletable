import React from 'react';
import menu from './img/menu.png';
import pessoas from './img/pessoas.png';
import camera from './img/camera.png';
import telefone from './img/telefone.png';
import 'App';


class ComponentesWhatslab extends React.Components {
state = {
NovaMensagem: ""

}

onChangeMensagem = (event) => {
    this.setState({NovaMensagem: event.target.value})
}
onChangeclick = (event) => {
    this.setState({NovaMensagem: event.target.value})
}

render() {
  return <div>
      <img src="pessoas.png" alt="imagem do icone"/>
      <img src="camera.png" alt="imagem da camera"/>
      <img src="telefone.png" alt="imagem do telefone"/>
      <img src="menu.png" alt="imagem do menu"/>
      <div>
          <testarea/>
      </div>
      <div>
        <h4>usuário</h4>
        <input mensagem={'mensagem'} onChange={this.onChangeMensagem} value={this.state.NovaMensagem}/>
        <button onClick={this.onChangeclick}>enviar</button>
        
      </div>
  </div>  
}
}
export default ComponentesWhatslab;