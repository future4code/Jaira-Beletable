import React, { useState } from 'react'
import { PostContainer, PostHeader, UserPhoto, PostPhoto, PostFooter, CommentContainer } from './styles'

import IconeComContador from '../IconeComContador/IconeComContador'
import SecaoComentario from '../SecaoComentario/SecaoComentario'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
export function Posts() {
  const [postValue,setPostValue] = useState (""),
  const [curtidaValue,setCurtidaValue] = useState (""),
  const [comentarioValue,setComentarioValue] = useState (""),
  const [enviarComentarioValue,setEnviarComentarioValue] = useState ("")
  const [valorCurtidas,setValorCurtidas] = useState (0)
  const [valorComentarios,setValorComentarios] = useState (0)
}
const Post = (event) => {
setpostValue(event.target.value)


  const onClickCurtida = (e) => {
setCurtidasValue(e.target.value)
  };

  const onClickComentario = (e) => {
    setComentarioValue(e.target.value)
  };

  const enviarComentario = (e) => {
    setEnviarComentarioValue(e.target.value)
  }
const numeroCurtidas =  () => {
  setvalorCurtidas(valorCurtidas + 1)
}
const numeroComentarios = () => {
  setValorComentarios(valorComentarios + 1)
}

  return (
    <PostContainer>
      <PostHeader>
        <UserPhoto src={props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={props.fotoPost} alt={'Imagem do post'}/>

      <PostFooter>
        <IconeComContador
        value={curtidaValue}
           icone={iconeCurtida}
          onClickIcone={onClickCurtida}
           valorContador={numeroCurtidas}
        />

        <IconeComContador
        value={postValue}
        value={comentarioValue}
          icone={iconeComentario}
          value={enviarComentarioValue}
          onClickIcone={onClickComentario}
           valorContador={numeroComentarios}
        />
      </PostFooter>
      { {SecaoComentario} }
    </PostContainer>
  )
}

export default Post