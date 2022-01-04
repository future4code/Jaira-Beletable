import React, {useState} from 'react'
import styled from "styled-components"

const CommentContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;
`

const InputComment = styled.input `
    width: 100%;
    margin-right: 5px;
`
export function Comentarios() {
	const [SecaoComentarioValue,setCometarioValue] = useState ("")
}
const SecaoComentario = (props) => {
setCometario,SecaoComentario

	const onChangeComentario = (e) => {
    setComentarioValue(e.target.value)
	}

	return (
		<CommentContainer>
			<InputComment
				className={'input-comentario'}
				placeholder={'Comentário'}
				value={SecaoComentario}
				onChange={onChangeComentario}
			/>
			<button onClick={() => { props.enviarComentario() }} >Enviar</button>
		</CommentContainer>
	)
}


export default SecaoComentario