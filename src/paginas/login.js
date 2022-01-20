import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import {useHistory} from 'react-router-dom';
import React,{useState} from 'react';

export function login() {
    const {email,setEmail} = useState ("")
    const {senha,setSenha} = useState ("")
}
 const onChangeEmail = (event) => {
     setEmail(event.target.value)
 }
 const onChangeSenha = (event) => {
     setSenha(event.target.value)
 }
const paginaLogin = () => {
    const history = useHistory()
const irPaginaIncial = () => {
history.push("/paginaInicial")

}
return <div>

    <p>Login</p>
    <input placeholder='email' value={email}
    onChange={onChangeEmail}
    />
    <input placeholder='senha' value={senha}
    onChange={onChangeSenha}
    />
    <button onClick=(irPaginaIncial)>voltar</button>
    <button onClick=(EntrarNoSite)>entrar</button>
</div>
}
}

