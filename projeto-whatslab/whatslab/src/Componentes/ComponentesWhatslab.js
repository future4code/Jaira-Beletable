import React from 'react';

import styled from 'styled-components'



const TelaContainer = styled.hr`
display:flex;
padding-bottom: 100%;
justify-content: center;
flex-direction: center;
align-items: center;
height: 100% ;
width : 560px;
background-color: pink;
`




 const Usuario = styled.h6`
display: flex;
`




const InputMensagem = styled.input`

padding-bottom: 100%;
border:skyblue;
align-items:center;
justify-content:center;
padding: 5px;
width: 80%;
margin: 0 auto;

`
const StyloButton = styled.button`
justify-content: space-between;
padding: 5px;

align-items:center;
justify-content:center;
float: right;
margin: 0 auto;
`

 class ComponentesWhatslab extends React.Component {
 
state = {
novaMensagem: '',
mostrarMensagem: false
}

onChangeMensagem = (event) => {
    this.setState({novaMensagem: event.target.value})
}
onChangeclick = (event) => {
    this.setState({novaMensagem: event.target.value})
  
}
onChangemensagemNova = () => {
  this.setState({mostrarMensagem: this.state.mostrarMensagem})
}
  

 
render() {
  const mensagem = () => {
    if(this.state.mostrarMensagem)
    return (
      <div>
        <h6>
          mensagem: {this.state.novaMensagem}
        </h6>
      </div>
    )
  }

  
  return ( <div>
    
      
        <p>{this.state.novaMensagem}</p>
          <TelaContainer
          
          {...mensagem}/>
          
        
      
        <Usuario>usuário</Usuario>
        <InputMensagem placeholder="mensagem" value={this.state.novaMensagem}  onChange={this.onChangeMensagem}/>
        <StyloButton onClick={this.onChangeclick} onChange={this.onChangeMensagem}>enviar</StyloButton>
        
      </div>
   
  );
}
  }
export default ComponentesWhatslab;