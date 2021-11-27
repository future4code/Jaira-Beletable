import React from 'react';
import styled from 'styled-components'

const ContainerTarefa = styled.div`
display: flex;
justify-content: center;
align-items: center;
text-align: center;
`
class App extends React.Component {
  state= {
    texto: "",
    completas: false,
    tarefas:[]
  }
  componentDidMount() {
    this.pegarTarefas();
  const textoLS = localStorage.getItem("texto") || "";
    
    this.setState({  texto: textoLS });

  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.texto !== this.state.texto) {
      localStorage.setItem("texto", this.state.texto);
      
    };
    mudarTexto = (e) => {
      this.setState({ texto: e.target.value });
    };
    limpar = () => {
      this.setState({ texto: "" });

      enviarTarefa = () => {
       const novaTarefa = {
                  texto: this.state.texto
          
    };
    pegarTarefas = () => {
      const  enviar =
        JSON.parse(localStorage.getItem("historicotarefas")) || [];
      this.setState({ tarefas: enviar });
    };
  render() ;{

             const novaLista = [...this.state.tarefas, novaTarefa];
    localStorage.setItem("historicotarefas", JSON.stringify(novaLista));

    this.setState({ tarefas: novaLista });
    this.limpar();
  };
      
   const listasDeTatefas = ['nunhuma','pendente','completas']
const listaTarefasCompletas = listasDeTatefas.map((listas) => {
   <lis>{listas}</lis>
})

}  
  let  filtrarTarefa
  switch (this.state.filtrarTarefa) {
    case nenhuma:
      
      break;
    case pendente:
      break;
    case completas:
      break;
  
    default:
      break;
  } 

      
 
  return ( 
    <ContainerTarefa>
    <h1>Lista de Tarefas</h1>
    <input
    value={this.state.texto}
    onChange={this.mudartexto}
    />
    <button onclick={this.enviarTarefa}>adicionar</button>
<h6>filtro</h6>
<ul>{listaTarefasCompletas}</ul>
{filtrarTarefa}
 </ContainerTarefa>       
  );         
  }  
}
} export default App;
