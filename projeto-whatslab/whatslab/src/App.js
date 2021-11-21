import React from 'react';
import  ComponentesWhatslab from './Componentes/ComponentesWhatslab'
import styled from 'styled-components'

const CardMensagem = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding-bottom: 100%;
`



function App() {

  
  return (
     <CardMensagem>

    <ComponentesWhatslab/>
    </CardMensagem>
 )};
        
        
     
      
    
  
  

export default App;
