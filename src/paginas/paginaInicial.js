import {BrowserRouter,Route,Switch} from 'react-router-dom';
import {useHistory} from 'react-router-dom';
import React from 'react';

export function paginaInical() {

const paginaLogin = () => {
    const history = useHistory()
const irPaginaIncial = () => {
history.push("/login")
const paginaViagens = () => {
    history= useHistory()
    history.push("/paginaViagens")
}
return

<div>
    <p>Labex</p>
    <button onClick=(irParaViagens)>Ver Viagens</button>
    <button onClick=(irParaLogin)>ÁREA de  ADMIN</button>
</div>
}